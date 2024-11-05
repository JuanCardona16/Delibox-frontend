import { PUBLIC_ROUTES } from "@/config/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLogin } from "./../../hooks";
import styles from "./login.module.css";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { login, isPending } = useLogin();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    if (data.email !== "" && data.password !== "") {
      login(data);
    }
  };

  if (isPending) return <div>Cargando...</div>;

  return (
    <div className={styles.container}>
      <h2>Iniciar sesión</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        className={styles.form}
      >
        <label htmlFor="email">Correo electronico</label>
        <input
          className={styles.input}
          id="email"
          type="email"
          placeholder="Correo electrónico"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          className={styles.input}
          id="password"
          type="text"
          placeholder="contraseña"
          {...register("password", {
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
              },
            },
          })}
        />

        <button type="submit" className={styles.formButton}>
          Iniciar sesión
        </button>
      </form>
      <p>
        No tienes una cuenta?{" "}
        <Link to={`${PUBLIC_ROUTES.REGISTER}`}>Registrate aqui</Link>
      </p>
    </div>
  );
};

export default Login;
