import styles from "./HallCalendar.module.scss";
import arrowRightSvg from "~/assets/arrow-right.svg";

interface HallCalendarProps {
  days: Date[];
  selectedDay: Date;
  onSelectDate: (date: Date) => void;
}

export default function HallCalendar({ days, selectedDay, onSelectDate }: HallCalendarProps) {
  return (
    <div className={styles.hallCalendar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={`${styles.btn} ${styles.btnControl} ${styles.btnControlLeft}`}>
            <div className={styles.btnWrapper}>
              <img src={arrowRightSvg} alt="" />
            </div>
          </button>
        </li>
        {days.map((date, index) => {
          const dayName = date.toLocaleDateString("ru-RU", { weekday: "short" }).toLocaleUpperCase();
          const dayNumber = date.getDate();

          const isActive = date.getDate() === selectedDay.getDate() && date.getMonth() === selectedDay.getMonth();

          return (
            <li key={dayNumber} className={`${styles.item} ${styles.itemActive}`}>
              <button key={index} className={`${styles.btn} ${isActive ? styles.btnActive : ""}`} onClick={() => onSelectDate(date)}>
                <div className={styles.btnWrapper}>
                  <div className={styles.btnDateofweek}>{dayName}</div>
                  <div className={styles.btnDatenumber}>{dayNumber}</div>
                </div>
              </button>
            </li>
          );
        })}

        <li className={styles.item}>
          <button className={`${styles.btn} ${styles.btnControl}`}>
            <div className={styles.btnWrapper}>
              <img src={arrowRightSvg} alt="" />
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}
