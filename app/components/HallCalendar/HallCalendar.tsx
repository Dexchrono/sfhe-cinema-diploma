import styles from "./HallCalendar.module.scss";

export default function HallCalendar() {
  return (
    <div className={styles.hallCalendar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={`${styles.btn} ${styles.btnControl} ${styles.btnControlLeft}`}>
            <div className={styles.btnWrapper}>
              <img src="./arrow-right.svg" alt="#" />
            </div>
          </button>
        </li>
        <li className={`${styles.item} ${styles.itemActive}`}>
          <button className={`${styles.btn} ${styles.btnActive}`}>
            <div className={styles.btnWrapper}>
              <div className={styles.btnDateofweek}>ПН</div>
              <div className={styles.btnDatenumber}>31</div>
            </div>
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn}>
            <div className={styles.btnWrapper}>
              <div className={styles.btnDateofweek}>ПН</div>
              <div className={styles.btnDatenumber}>31</div>
            </div>
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn}>
            <div className={styles.btnWrapper}>
              <div className={styles.btnDateofweek}>ПН</div>
              <div className={styles.btnDatenumber}>31</div>
            </div>
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn}>
            <div className={styles.btnWrapper}>
              <div className={styles.btnDateofweek}>ПН</div>
              <div className={styles.btnDatenumber}>31</div>
            </div>
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.btn}>
            <div className={styles.btnWrapper}>
              <div className={styles.btnDateofweek}>ПН</div>
              <div className={styles.btnDatenumber}>31</div>
            </div>
          </button>
        </li>
        <li className={styles.item}>
          <button className={`${styles.btn} ${styles.btnSpecial}`}>
            <div className={styles.btnWrapper}>
              <div className={styles.btnDateofweek}>ПН</div>
              <div className={styles.btnDatenumber}>31</div>
            </div>
          </button>
        </li>
        <li className={styles.item}>
          <button className={`${styles.btn} ${styles.btnSpecial}`}>
            <div className={styles.btnWrapper}>
              <div className={styles.btnDateofweek}>ПН</div>
              <div className={styles.btnDatenumber}>31</div>
            </div>
          </button>
        </li>
        <li className={styles.item}>
          <button className={`${styles.btn} ${styles.btnControl}`}>
            <div className={styles.btnWrapper}>
              <img src="./arrow-right.svg" alt="#" />
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}
