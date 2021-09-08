import classes from "./NavBar.module.css";
import { useContext } from "react";
import { LoginContext } from "../../store/login-context";
const NavBar = () => {
  const loginCtx = useContext(LoginContext);
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">Search</a>
        </li>

        <li>
          <a href="/">Add Project</a>
        </li>
        
        <li>
          <button>{`${loginCtx.name} ${loginCtx.surname}`}</button>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
