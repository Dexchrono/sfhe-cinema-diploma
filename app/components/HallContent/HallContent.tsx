import HallCalendar from "../HallCalendar/HallCalendar";
import styles from "./HallContent.module.scss";
import ActivitiesList from "../ActivitiesList/ActivitiesList";
import type { Hall, Film, Seance } from "~/types/types";

interface HallContentProps {
  halls: Hall[];
  films: Film[];
  seances: Seance[];
  calendarDays: Date[];
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function HallContent({ halls, films, seances, calendarDays, selectedDate, setSelectedDate }: HallContentProps) {
  return (
    <section className={styles.hallContent}>
      <div className={styles.calendar}>
        <HallCalendar days={calendarDays} selectedDay={selectedDate} onSelectDate={setSelectedDate} />
      </div>
      <div className={styles.activities}>
        <ActivitiesList halls={halls} films={films} seances={seances} />
      </div>
    </section>
  );
}
