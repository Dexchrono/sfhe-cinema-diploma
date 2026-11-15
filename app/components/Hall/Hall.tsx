import { useState } from "react";
import type { Data } from "../../types/types";
import getNextNDays from "../../utility/getNextNDays";
import HallContent from "../HallContent/HallContent";
import Header from "../Header/Header";
import "./Hall.module.scss";

export function Hall({ halls, films, seances }: Data) {
  const calendarDays = getNextNDays(7);
  const [selectedDate, setSelectedDate] = useState<Date>(calendarDays[0]);

  return (
    <>
      <Header />
      <HallContent halls={halls} films={films} seances={seances} calendarDays={calendarDays} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </>
  );
}
