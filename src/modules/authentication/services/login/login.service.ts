import { ApiUrl } from "@/config/api";
import { LoginPrefixApiRoutes } from "@/config/constants";
import { AxiosResponse } from "axios";

interface Props {
  email: string;
  password: string;
}

interface ServiceResponse {
  error: {
    message: string;
    status: number;
  }
}

const loginService = async ({ email, password }: Props): Promise<string | ServiceResponse> => {
  try {
    const response: AxiosResponse = await ApiUrl.post(LoginPrefixApiRoutes, { email, password });
    return response.data
  } catch (error) {
    console.log(error)
    return {
      error: {
        message: `Internal Server Error`,
        status: 500,
      },
    }
  }
}

export default loginService