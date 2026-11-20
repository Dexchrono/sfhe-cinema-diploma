import type { Data, Film, Hall, Seance } from "~/types/types";
import Activity from "../Activity/Activity";
import styles from "./ActivitiesList.module.scss";

interface ActivitiesListProps {
  selectedDate: Date;
  halls: Hall[];
  films: Film[];
  seances: Seance[];
}

export default function ActivitiesList({ halls, films, seances, selectedDate }: ActivitiesListProps) {
  return (
    <ul className={styles.activitiesList}>
      {films.map((film) => (
        <li key={film.id} className={styles.activitiesListItem}>
          <Activity halls={halls} film={film} seances={seances} selectedDate={selectedDate} />
        </li>
      ))}
    </ul>
  );
}
