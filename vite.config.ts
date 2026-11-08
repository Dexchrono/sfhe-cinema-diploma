import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/sfhe-cinema-diploma/",
  plugins: [reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
});
