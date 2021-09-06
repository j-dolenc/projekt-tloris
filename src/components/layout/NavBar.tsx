import classes from './NavBar.module.css';
const NavBar = () =>{

    return <nav className={classes.nav}>
    <ul>
      
        <li>
          <a href="/">Users</a>
        </li>
      
      
        <li>
          <a href="/">Admin</a>
        </li>
    
     
        <li>
          <button>Logout</button>
        </li>
     
    </ul>
  </nav>
}
export default NavBar;