import type { PreOrder } from "../../types/types";
import screenImg from "../../assets/screen.png";
import Header from "../Header/Header";
import styles from "./TicketOrderSeatsHall.module.scss";
import Seat from "../Seat/Seat";
import btn from "../Header/Header.module.scss";
export function TicketOrderSeatsHall({ film, hall, seance, selectedDate }: PreOrder) {
  return (
    <>
      <Header />
      <section className={styles.seathall}>
        <div className={styles.container}>
          <div className={styles.seathall__content}>
            <div className={styles.seanceInfo}>
              <h2 className={styles.seanceInfo__title}>{film.film_name}</h2>
              <div className={styles.seanceInfo__time}>Начало сеанса: {seance.seance_time}</div>
              <h2 className={styles.seanceInfo__hall}>{hall.hall_name}</h2>
            </div>
            <div className={styles.seatsInfo}>
              <div className={styles.grid__wrapper}>
                <div className={styles.grid__header}>
                  <img className={styles.grid__img} src={screenImg} alt="#" aria-hidden="true" />
                </div>
                <ul className={styles.grid__row_list}>
                  {hall.hall_config.map((row, rowIndex) => {
                    return (
                      <li key={rowIndex} className={styles.grid__row_item}>
                        <ul className={`${styles.grid__row_cell}`}>
                          {row.map((cell, cellIndex) => (
                            <Seat key={`${rowIndex}-${cellIndex}`} type={cell} />
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <ul className={styles.legendList}>
                <li>
                  <div className={styles.legendList__card}>
                    <Seat type={"standart"} key="standart" />
                    <span>Свободно ({hall.hall_price_standart}руб)</span>
                  </div>
                </li>
                <li>
                  <div className={styles.legendList__card}>
                    <Seat type={"sold"} key="sold" />
                    <span>Занято</span>
                  </div>
                </li>
                <li>
                  <div className={styles.legendList__card}>
                    <Seat type={"vip"} key="vip" />
                    <span>Свободно VIP ({hall.hall_price_vip}руб)</span>
                  </div>
                </li>
                <li>
                  <div className={`${styles.legendList__card} ${styles.legendList__card_selected}`}>
                    <Seat type={"sold"} key="selected" />
                    <span>Выбрано</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.controls}>
              <button className={`${styles.controls__btn} ${btn.btn}`}>Забронировать</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
