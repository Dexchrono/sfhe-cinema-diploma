import type { Route } from "./+types/home";
import { Hall } from "../components/Hall/Hall";
export function meta({}: Route.MetaArgs) {
  return [{ title: "My React Router Cinema App" }, { name: "description", content: "Welcome" }];
}
export default function Home() {
  return <Hall />;
}
