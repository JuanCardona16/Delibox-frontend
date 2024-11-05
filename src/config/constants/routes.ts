// Rutas de cada enpoint
export const AuthPrefixApiRoutes = "/auth";
export const UserPrefixApiRoutes = "/user";

export const LoginPrefixApiRoutes = `${AuthPrefixApiRoutes}/login`
export const RegisterPrefixApiRoutes = `${AuthPrefixApiRoutes}/register`

// Rutas para react
export const PUBLIC_ROUTES = {
  LOGIN: "iniciar-sesion",
  REGISTER: "registrarse",
};

export const PRIVATE_ROUTES = {
  ROOT: "/",
  PROFILE: "perfil",
  NOTIFICATIONS: "notificaciones",
  ORDERS: "ordenes",
  SHOPPING_CART: "carrito-de-compras",
};
