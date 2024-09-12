import { PUBLIC_ROUTES } from "@/config/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom"

type Inputs = {
  email: string;
  password: string;
}

const Login = () => {

  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Handle form submission
    console.log(data)

    const LoginService = async (data: Inputs) => fetch(`http://localhost:3000/api/auth/login`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
     })

     LoginService(data).then(response => response.json()).then(response => console.log(response))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <input 
          type="email"
          placeholder="example@example.com"
          {...register('email', { 
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })
          }
        />
        <input 
          type="text"
          placeholder="algorithm"
          {...register('password', { 
              required: true,
              minLength: 6,
              pattern: /^\S*$/,
              validate: {
                format: (password) => {
                  return (
                    /[A-Z]/g.test(password) &&
                    /[a-z]/g.test(password) &&
                    /[0-9]/g.test(password)
                  );
                }
              }
            })
          }
        />
        
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to={`/${PUBLIC_ROUTES.REGISTER}`}>Register here</Link></p>
    </div>
  )
}

export default Login