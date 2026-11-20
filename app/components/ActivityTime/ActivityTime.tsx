import getSortedSeances from "~/utility/getSortedSeances";
import type { Film, Hall, Seance } from "../../types/types";
import styles from "./ActivityTime.module.scss";
import { Link } from "react-router";

interface ActivityTimeProps {
  halls: Hall[];
  seances: Seance[];
  film: Film;
}

export default function ActivityTime({ halls, seances, film }: ActivityTimeProps) {
  const sortedSeances = getSortedSeances(seances);

  const hallsWithSeances = halls
    .filter((hall) => hall.hall_open !== 0)
    .map((hall) => ({
      hall,
      seances: sortedSeances.filter((s) => s.seance_hallid === hall.id),
    }))
    .filter((item) => item.seances.length > 0);

  return (
    <div className={styles.seances}>
      <ul className={styles.seancesList}>
        {hallsWithSeances.map(({ hall, seances: hallSeances }) => (
          <li key={hall.id} className={styles.hallsListItem}>
            <div className={styles.hallInfo}>
              <div className={styles.hallName}>{hall.hall_name}</div>
              <ul className={styles.hallEventsList}>
                {hallSeances.map((seance) => (
                  <li key={seance.id} className={styles.hallEventsItem}>
                    <Link className={styles.hallEventsItemInfo} to="seats" state={{ hall, film, seance }}>
                      {seance.seance_time}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
