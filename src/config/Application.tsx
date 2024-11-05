import { Suspense } from "react"
import Router from "./routes/AplicationRoutes"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./QueryClient/QueryClientConfig"

function Application() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Cargando...</div>}>
        <Router />
      </Suspense>
    </QueryClientProvider>
  )
}

export default Application
