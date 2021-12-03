import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Great Quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            {/* in v6 activeClassName is not working anymore 
            but instead we can find out whether the Link is active through 
            the data that is passed on from react-router-dom to className */}
            <NavLink
              to="quotes-app/quotes"
              className={(navData) => (navData.isActive ? styles.active : "")}
              /* activeClassName={styles.active} */
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="quotes-app/new-quote"
              className={(navData) => (navData.isActive ? styles.active : "")}
             /*  activeClassName={styles.active} */
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
