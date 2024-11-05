import { useLocalStorageListener } from "@/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../constants";

interface Props {
  privateValidation: boolean;
}

const privateValidateFragment = <Outlet />
const publicValidateFragment = <Navigate replace to={`${PRIVATE_ROUTES.ROOT}`} />

export const AuthGuards: React.FC<Props> = ({ privateValidation }): JSX.Element => {

  const token = useLocalStorageListener!('token')

  return token ? (
    privateValidation ? (
      privateValidateFragment
    ) : (
      publicValidateFragment
    )
  ) : (
    <Navigate replace to={`${PUBLIC_ROUTES.LOGIN}`} />
  )
}
