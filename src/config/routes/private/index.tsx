import { Navigate, Route } from "react-router-dom";
import { PRIVATE_ROUTES } from "../../constants";
import { RoutesWithNotFound } from "@/components/layout";
import LayoutRoot from "@/components/layout/rootLayout/LayoutRoot";
// import { HomePages } from '@/modules/home/pages'

export const PrivateRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route path={PRIVATE_ROUTES.ROOT} element={<Navigate to="/" />} />
      <Route path={PRIVATE_ROUTES.ROOT} element={<LayoutRoot />}>
        <Route index element={<div>Vista principal</div>} />
        <Route
          path={PRIVATE_ROUTES.PROFILE}
          element={<div>Perfil de usuario</div>}
        />
        <Route
          path={PRIVATE_ROUTES.NOTIFICATIONS}
          element={<div>Notificiones</div>}
        />
        <Route
          path={PRIVATE_ROUTES.SHOPPING_CART}
          element={<div>Carrito de compras</div>}
        />
        <Route path={PRIVATE_ROUTES.ORDERS} element={<div>Ordenes</div>} />
      </Route>
    </RoutesWithNotFound>
  );
};
