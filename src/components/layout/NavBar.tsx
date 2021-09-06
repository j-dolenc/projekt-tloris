import classes from "./NavBar.module.css";

const NavBar = () => {
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
          <button>Jurij Dolenc</button>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
