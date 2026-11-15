import type { Route } from "./+types/HomePage";
import MyApi from "../api/api";
import { Hall } from "../components/Hall/Hall";

export async function clientLoader() {
  const res = await MyApi();
  return res;
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return <Hall halls={loaderData.halls} films={loaderData.films} seances={loaderData.seances} />;
}
