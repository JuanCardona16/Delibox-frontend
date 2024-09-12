import { BrowserRouter, Route } from "react-router-dom"
import { PRIVETE_ROUTES, PUBLIC_ROUTES } from "../constants"
import { RoutesWithNotFound } from "@/components"
import { Login, Register } from '@/modules/authentication/pages'

const router = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path={PRIVETE_ROUTES.ROOT} >
          <Route index element={<div>Pagina principal</div>} />
          <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
          <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  )
}

export default router