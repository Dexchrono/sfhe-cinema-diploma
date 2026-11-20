import type { PreOrder } from "../../types/types";

export function TicketOrderSeatsHall({ film, hall, seance }: PreOrder) {
  return (
    <>
      <section className="seathall">
        <div className="container">
          <div className="seathall__content">
            <div className="top">
              <div>{film.film_name}</div>
              <div>Начало сеанса: {seance.seance_time}</div>
              <div>{hall.hall_name}</div>
            </div>
            <div className="mid">
              <div className="midUP">
                <img src="../../assets/screen.png" alt="#" aria-hidden="true" />
              </div>
              <div className="midMiD"></div>
              <div className="legend"></div>
            </div>
            <div className="bottom">
              <button>Забронировать</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
