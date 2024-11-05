import { PRIVATE_ROUTES } from "@/config/constants"
import { clearLocalStorage } from "@/helpers"
import { useNavigate } from "react-router-dom"

export const useLogout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    clearLocalStorage('token')
    navigate(PRIVATE_ROUTES.ROOT)
  }

  return { handleLogout }
}

