import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ProjectStruct from "../components/projects/ProjectStruct";
import classes from "./Projekt.module.css";

const Projekt = () => {
  return (
    <div className={classes.project}>
      {/* <p>Ime projekta</p>  */}
      <div className={classes.box}>
        {/* <p>Tukaj bo prikazan projekt...Nova komponenta</p> */}
        <DndProvider backend={HTML5Backend}>
          <ProjectStruct />
        </DndProvider>
      </div>
      <div className={classes.options}>
        <p>Možnosti komponenta</p>
      </div>
    </div>
  );
};
export default Projekt;
