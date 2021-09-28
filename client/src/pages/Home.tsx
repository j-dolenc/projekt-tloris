// import classes from "./Home.module.css";
// const Home = () => {
//   return (
//     <section className={classes.home}>
//       <h1>Kaj je Projekt Tloris?</h1>
//       <h3>Projekt Tloris je preprost pomočnik, ki ga lahko uporabite za:</h3>
//       <ul>
//         <li>boljši pregled nad svojimi projetki</li>
//         <li>urejanje projektov</li>
//         <li>dodajanje opisov datotekam</li>
//         <li>urejanje struktur projektov</li>
//       </ul>
//     </section>
//   );
// };
// export default Home;
import classes from "./Home.module.css";
import { LoginContext } from "../store/login-context";
import { useContext } from "react";
const Home = () => {
  const loginCtx = useContext(LoginContext);
  return (
    <section className={classes.home}>
      <h1>{`Pozdravljen/a ${loginCtx.name}`}</h1>
      <h2>Kaj je projekt Index</h2>
      <h3>Projekt Index je preprost pomočnik, ki ga lahko uporabite za:</h3>
      <ul>
        <li>boljši pregled nad svojimi projetki</li>
        <li>urejanje projektov</li>
        <li>dodajanje opisov datotekam</li>
        <li>urejanje struktur projektov</li>
      </ul>
      <div>
        <h2>Pričnite z delom:</h2>
        <div className={classes.btngrp}>
          <button className={classes.btn}>Odpri Projekt</button>
          <button className={classes.btn}>Ustvari Projekt</button>
          <button className={classes.btn}>Log Out</button>
        </div>
      </div>
    </section>
  );
};
export default Home;
