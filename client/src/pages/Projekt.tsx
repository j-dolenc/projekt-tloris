import Options from "../components/projects/Options";
import ProjectStruct from "../components/projects/ProjectStruct";
import classes from "./Projekt.module.css";

const Projekt = () => {
  return (
    <div className={classes.project}>
      {/* <p>Ime projekta</p>  */}
      <div className={classes.box}>
        {/* <p>Tukaj bo prikazan projekt...Nova komponenta</p> */}

        <ProjectStruct />
      </div>
      <div className={classes.options}>
        <Options />
      </div>
    </div>
  );
};
export default Projekt;
