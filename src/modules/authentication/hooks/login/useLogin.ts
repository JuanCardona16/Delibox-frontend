import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import loginService from "../../services/login/login.service"
import { persistLocalStorage } from '@/helpers'
import { PRIVATE_ROUTES } from '@/config/constants';


interface ServiceResponse {
  error: {
    message: string;
    status: number;
  }
}

export const useLogin = () => {
  const navigate = useNavigate()

  const { mutateAsync: login, isPending, isError } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginService,
    onSuccess: (data) => {
      console.log(data)
      persistLocalStorage<string | ServiceResponse>('token', data)
      navigate(PRIVATE_ROUTES.ROOT)
    },
    onError: (error) => {
      console.error("Login failed", error)
    },
  })

  return { login, isPending, isError }

}