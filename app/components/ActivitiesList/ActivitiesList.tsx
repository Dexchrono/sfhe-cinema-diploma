import type { Data } from "~/types/types";
import Activity from "../Activity/Activity";
import styles from "./ActivitiesList.module.scss";

export default function ActivitiesList({ halls, films, seances }: Data) {
  return (
    <ul className={styles.activitiesList}>
      {films.map((film) => (
        <li key={film.id} className={styles.activitiesListItem}>
          <Activity halls={halls} film={film} seances={seances} />
        </li>
      ))}
    </ul>
  );
}
