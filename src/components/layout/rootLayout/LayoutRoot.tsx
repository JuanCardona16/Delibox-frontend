import { Link, Outlet } from "react-router-dom";
import styles from "./rootLayout.module.css";
import { Bell, BookText, Home, ShoppingCart, User } from "lucide-react";
import { PRIVATE_ROUTES } from "@/config/constants";

const LayoutRoot = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.content}>
          <Outlet />
        </section>
        <section className={styles.menu}>
          <ul>
            <li>
              <Link to={PRIVATE_ROUTES.ROOT}>
                <Home />
                <span>home</span>
              </Link>
            </li>
            <li>
              <Link to={PRIVATE_ROUTES.ORDERS}>
                <BookText />
                <span>ordenes</span>
              </Link>
            </li>
            <li>
              <Link to={PRIVATE_ROUTES.SHOPPING_CART}>
                <ShoppingCart />
                <span>carrito</span>
              </Link>
            </li>
            <li>
              <Link to={PRIVATE_ROUTES.NOTIFICATIONS}>
                <Bell />
                <span>Notificación</span>
              </Link>
            </li>
            <li>
              <Link to={PRIVATE_ROUTES.PROFILE}>
                <User />
                <span>perfil</span>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default LayoutRoot;
