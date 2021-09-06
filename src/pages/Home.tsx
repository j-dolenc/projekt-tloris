import classes from "./Home.module.css";
const Home = () => {
  return (
    <section className={classes.home}>
      <h1>Kaj je Projekt Tloris?</h1>
      <h3>Projekt Tloris je preprost pomočnik, ki ga lahko uporabite za:</h3>
      <ul>
        <li>boljši pregled nad svojimi projetki</li>
        <li>urejanje projektov</li>
        <li>dodajanje opisov datotekam</li>
        <li>urejanje struktur projektov</li>
      </ul>
    </section>
  );
};
export default Home;
