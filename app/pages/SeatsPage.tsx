import { useLocation } from "react-router";
import { TicketOrderSeatsHall } from "~/components/TicketOrderSeatsHall/TicketOrderSeatsHall";
import type { PreOrder } from "~/types/types";

export default function SeatsPage() {
  const location = useLocation();
  const { hall, seance, film, selectedDate } = (location.state as PreOrder) || {};

  if (!film || !hall || !seance) {
    return <div>Сеанс не выбран. Вернитесь на главную страницу.</div>;
  }

  return <TicketOrderSeatsHall film={film} hall={hall} seance={seance} selectedDate={selectedDate} />;
}
