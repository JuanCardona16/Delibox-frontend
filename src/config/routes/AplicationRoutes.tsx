import { BrowserRouter, Route } from "react-router-dom"
import { PRIVETE_ROUTES, PUBLIC_ROUTES } from "../constants"
import { RoutesWithNotFound } from "@/components"

const router = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path={PRIVETE_ROUTES.ROOT} >
          <Route index element={<div>Pagina principal</div>} />
          <Route path={PUBLIC_ROUTES.LOGIN} element={<div>pagina de inicio de secion</div>} />
          <Route path={PUBLIC_ROUTES.REGISTER} element={<div>pagina de registro</div>} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  )
}

export default router