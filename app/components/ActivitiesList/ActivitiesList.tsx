import Activity from "../Activity/Activity";
import styles from "./ActivitiesList.module.scss";
import MyApi from "../../api/api";
import { useEffect, useState } from "react";
import type { Film, Hall, Seance } from "../../types/types";

export default function ActivitiesList() {
  const [halls, setHalls] = useState<Hall[]>([]);
  const [films, setFilms] = useState<Film[]>([]);
  const [seances, setSeances] = useState<Seance[]>([]);

  useEffect(() => {
    MyApi().then((res) => {
      setHalls(res.halls);
      setFilms(res.films);
      setSeances(res.seances);
    });
  }, []);

  return (
    <ul className={styles.activitiesList}>
      {films.map((film) => (
        <li key={film.id} className={styles.item}>
          <Activity halls={halls} film={film} seances={seances} />
        </li>
      ))}
    </ul>
  );
}
