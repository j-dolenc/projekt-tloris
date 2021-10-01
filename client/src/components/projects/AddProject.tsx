import DropDown from "../UI/DropDown";
import classes from "./AddProject.module.css";


const AddProject: React.FC<{ onCancelClick: () => void }> = () => {
  const onSubmitHandler = async (event: React.FormEvent) => {};
  let data:{value:string,label:string}[]=[];
	  const getOptions =async() => {
		try {
            
            const response = await fetch(`http://192.168.38.164:5000/users`);//?pass=${enteredPassword}
            const jsonData = await response.json();
            console.log(jsonData);
			for(let i = 0; i < jsonData.length;i++){
				//TODO: dodaj vse kar dovis v usestate options, nato pa se oddelke
				data.push({value:jsonData[i].id,label:jsonData[i].username});
			}
			console.log(data);
        } catch (error:any) {
            console.error(error.message);
        }
		try {
            
            const response = await fetch(`http://192.168.38.164:5000/oddelki`);//?pass=${enteredPassword}
            const jsonData = await response.json();
            console.log(jsonData);
			for(let i = 0; i < jsonData.length;i++){
				//TODO: dodaj vse kar dovis v usestate options, nato pa se oddelke
				data.push({value:`od${jsonData[i].id}`,label:jsonData[i].ime});
			}
			console.log(data);
        } catch (error:any) {
            console.error(error.message);
        }

	  }
	  getOptions();
  
  return (
    <section className={classes.auth}>
      <h1>Dodaj Nov Projekt</h1>
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
          <label>Lahko Ga Vidijo</label>
          <DropDown data={data}/>
        </div>
        {/* moznost, kdo lahko vidi projekt, naredi
            z izbiro večih moćnosti.... svoja komponenta... */}
        
      </form>
    </section>
  );
};
export default AddProject;
