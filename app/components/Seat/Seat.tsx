import type { SeatType } from "~/types/types";
import styles from "./Seat.module.scss";

interface SeatProps {
  type: SeatType;
  key: string;
}

export default function Seat({ key, type }: SeatProps) {
  switch (type) {
    case "standart":
      return (
        <li key={key} className={`${styles.seat}`}>
          <button type={"button"}></button>
        </li>
      );

    case "vip":
      return (
        <li key={key} className={`${styles.seat} ${styles.vip}`}>
          <button type={"button"}></button>
        </li>
      );

    case "sold":
      return (
        <li key={key} className={`${styles.seat} ${styles.sold}`}>
          <button type={"button"} disabled></button>
        </li>
      );

    case "disabled":
      return (
        <li key={key} className={`${styles.seat} ${styles.disabled}`}>
          <span></span>
        </li>
      );
  }
}
