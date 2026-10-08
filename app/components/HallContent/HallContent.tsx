import HallCalendar from "~/components/HallCalendar/HallCalendar";
import styles from "./HallContent.module.scss";
import ActivitiesList from "~/components/ActivitiesList/ActivitiesList";

export default function HallContent() {
  return (
    <section className={styles.hallContent}>
      <div className={styles.calendar}>
        <HallCalendar />
      </div>
      <div className={styles.activities}>
        <ActivitiesList />
      </div>
    </section>
  );
}
