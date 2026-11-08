import HallCalendar from "../HallCalendar/HallCalendar";
import styles from "./HallContent.module.scss";
import ActivitiesList from "../ActivitiesList/ActivitiesList";
import getNextNDays from "../../utility/getNextNDays";
import { useState } from "react";

export default function HallContent() {
  const calendarDays = getNextNDays(7);
  const [selectedDate, setSelectedDate] = useState<Date>(calendarDays[0]);

  return (
    <section className={styles.hallContent}>
      <div className={styles.calendar}>
        <HallCalendar days={calendarDays} selectedDay={selectedDate} onSelectDate={setSelectedDate} />
      </div>
      <div className={styles.activities}>
        <ActivitiesList />
      </div>
    </section>
  );
}
