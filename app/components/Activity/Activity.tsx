import type { DataPropsDrillingIssue } from "../../types/types";
import ActivityTime from "../ActivityTime/ActivityTime";
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
      <ActivityTime film={film} halls={halls} seances={seances.filter((s) => s.seance_filmid === film.id)} />
    </div>
  );
}
