import { BrowserRouter, Route } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../constants";
import { RoutesWithNotFound } from "@/components/layout";
import { Login, Register } from "@/modules/authentication/pages";
import { AuthGuards } from "@/config/AuthGuards";
import { PrivateRouter } from "./private";

const router = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />} />
        <Route element={<AuthGuards privateValidation={true} />}>
          <Route path={`${PRIVATE_ROUTES.ROOT}/*`} element={<PrivateRouter />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};

export default router;
