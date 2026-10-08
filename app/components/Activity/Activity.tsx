import type { Film, Hall, Seance } from "~/types/types";
import styles from "./Activity.module.scss";

export default function ActivityCard(halls: Hall[], film: Film, seances: Seance[]) {
  return (
    <div className={styles.activityCard}>
      <div className={styles.info}>
        <div className={styles.poster}>
          <img src={film.film_poster}></img>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{film.film_name}</div>
          <div className={styles.descr}></div>
          <div className={styles.duration}>{film.film_duration}</div>
        </div>
      </div>
      <div className={styles.seances}>
        <ul className={styles.seancesList}>
          <li className={styles.hallsListItem}>
            <div className={styles.hallInfo}>
              <div className={styles.hallName}>Зал 1</div>
              <ul className={styles.hallEventsList}>
                <li className={styles.hallEventsItem}>
                  <a className={styles.hallEventsItemInfo} href="#">
                    10:20
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.hallsListItem}>
            <div className={styles.hallInfo}>
              <div className={styles.hallName}>Зал 2</div>
              <ul className={styles.hallEventsList}>
                <li className={styles.hallEventsItem}>
                  <a className={styles.hallEventsItemInfo} href="#">
                    10:20
                  </a>
                </li>
                <li className={styles.hallEventsItem}>
                  <a className={styles.hallEventsItemInfo} href="#">
                    10:20
                  </a>
                </li>
                <li className={styles.hallEventsItem}>
                  <a className={styles.hallEventsItemInfo} href="#">
                    10:20
                  </a>
                </li>
                <li className={styles.hallEventsItem}>
                  <a className={styles.hallEventsItemInfo} href="#">
                    10:20
                  </a>
                </li>
                <li className={styles.hallEventsItem}>
                  <a className={styles.hallEventsItemInfo} href="#">
                    10:20
                  </a>
                </li>
                <li className={styles.hallEventsItem}>
                  <a className={styles.hallEventsItemInfo} href="#">
                    10:20
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
