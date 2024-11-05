import { PUBLIC_ROUTES } from "@/config/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from './register.module.css'

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    const RegisterService = async (data: Inputs) =>
      fetch(`http://localhost:3000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    RegisterService(data)
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  return (
    <div className={styles.container}>
      <h2>Crear una cuenta</h2>
      <form onSubmit={handleSubmit(onSubmit)} method="POST" className={styles.form}>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          className={styles.input}
          id="username"
          type="text"
          placeholder="nombre de usuario"
          {...register('username', {
            required: true
          })
        }
        />
        <label htmlFor="email">Correo electronico</label>
        <input
          className={styles.input}
          id="email"
          type="email"
          placeholder="Correo electrónico"
          {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })
          }
        />
        <label htmlFor="password">Contraseña</label>
        <input
          className={styles.input}
          type="text"
          id="password"
          placeholder="Contraseña"
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

        <button type="submit" className={styles.formButton}>Crear cuenta</button>
      </form>
      <p>Ya tienes una cuenta? <Link to={`${PUBLIC_ROUTES.LOGIN}`}>Inicia sesión aqui</Link></p>
    </div>
  );
};

export default Register;
