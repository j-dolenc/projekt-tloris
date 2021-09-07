import classes from "./Projekt.module.css";

const Projekt = () => {
  return (
      <div className={classes.project}>
        {/* <p>Ime projekta</p>  */}
        <div className={classes.box}>
          <p>Tukaj bo prikazan projekt...Nova komponenta</p>
        </div>
        <div className={classes.options}>
            <p>Možnosti komponenta</p>
        </div>
      </div>
    
  );
};
export default Projekt;
