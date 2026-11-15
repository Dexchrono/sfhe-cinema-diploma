import type { DataPropsDrillingIssue } from "../../types/types";
import styles from "./Activity.module.scss";

export default function ActivityCard({ halls, film, seances }: DataPropsDrillingIssue) {
  return (
    <div className={styles.activityCard}>
      <div className={styles.info}>
        <div className={styles.poster}>
          <img src={film.film_poster} width={150} height={200}></img>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{film.film_name}</div>
          <div className={styles.descr}>{film.film_description}</div>
          <div className={styles.duration}>{film.film_duration}</div>
          <div className={styles.origin}>{film.film_origin}</div>
        </div>
      </div>
      <div className={styles.seances}>
        <ul className={styles.seancesList}>
          {halls.map((hall) => (
            <li key={hall.id} className={styles.hallsListItem}>
              <div className={styles.hallInfo}>
                <div className={styles.hallName}>{hall.hall_name}</div>
                <ul className={styles.hallEventsList}>
                  {seances.map((seance) => (
                    <li key={seance.id} className={styles.hallEventsItem}>
                      <a className={styles.hallEventsItemInfo} href="#">
                        {seance.seance_time}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
