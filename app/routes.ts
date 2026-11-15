import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("pages/HomePage.tsx"), route("seats", "pages/SeatsPage.tsx"), route("confirm", "pages/ConfirmPage.tsx"), route("qr", "pages/QrPage.tsx"), route("adminauth", "pages/AdminAuthPage.tsx"), route("admin", "pages/AdminPage.tsx")] satisfies RouteConfig;
