export type SeatType = "standart" | "vip" | "disabled";

export interface Data {
  halls: Hall[];
  films: Film[];
  seances: Seance[];
}

export interface Hall {
  id: number;
  hall_name: string;
  hall_rows: number;
  hall_places: number;
  hall_config: SeatType[][];
  hall_price_standart: number;
  hall_price_vip: number;
  hall_open: 0 | 1;
}

export interface Film {
  id: number;
  film_name: string;
  film_duration: number;
  film_origin: string;
  film_poster: string;
}

export interface Seance {
  id: number;
  seance_filmid: number;
  seance_hallid: number;
  seance_time: string;
}
