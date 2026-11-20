import type { Seance } from "~/types/types";

export default function getSortedSeances(seances: Seance[]): Seance[] {
  let sortedSeances = [...seances].sort((a, b) => a.seance_time.localeCompare(b.seance_time));

  return sortedSeances;
}
