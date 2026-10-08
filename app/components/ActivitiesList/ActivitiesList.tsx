import Activity from "~/components/Activity/Activity";
import styles from "./ActivitiesList.module.scss";
import MyApi from "~/api/api";
import { useEffect, useState } from "react";
import type { Film, Hall, Seance } from "~/types/types";

export default function ActivitiesList() {
  const [halls, setHalls] = useState<Hall[]>([]);
  const [movies, setMovies] = useState<Film[]>([]);
  const [seances, setSeances] = useState<Seance[]>([]);

  useEffect(() => {
    MyApi().then((res) => {
      setHalls(res.halls);
      setMovies(res.films);
      setSeances(res.seances);
    });
  }, []);

  return (
    <ul className={styles.activitiesList}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <Activity halls={halls} movie={movie} seances={seances} />
        </li>
      ))}
    </ul>
  );
}
