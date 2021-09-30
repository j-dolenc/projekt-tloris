import classes from "./AddProject.module.css";


const AddProject: React.FC<{ onCancelClick: () => void }> = () => {
  const onSubmitHandler = async (event: React.FormEvent) => {};
  
  
  return (
    <section className={classes.auth}>
      <h1>Add a New Project</h1>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="projectName">Ime Projekta</label>
          <input type="text" id="projectName"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="path">Absolutna Pot Do Projekta</label>
          <input type="text" id="path"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Opis Projekta</label>
          <input type="text" id="description"></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description"></label>
          <input type="text" id="description"></input>
        </div>
        
      </form>
    </section>
  );
};
export default AddProject;
