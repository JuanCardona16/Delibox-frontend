import { Suspense } from "react"
import Router from "./routes/AplicationRoutes"

function Application() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Router />
    </Suspense>
  )
}

export default Application
