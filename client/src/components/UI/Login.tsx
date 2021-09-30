
import React, { useRef} from "react";
import classes from './Login.module.css';
import { useContext } from "react";
import { LoginContext } from "../../store/login-context";
const Login: React.FC <{onCancelClick:() => void}> = (props) =>{
    //const [pass,setPass] = useState(['','']);
    const userRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const loginCtx = useContext(LoginContext);
    const onSubmitHanlder =async (event:React.FormEvent) => {
        event.preventDefault();
        const enteredUsername= userRef.current!.value;
        const enteredPassword= passRef.current!.value;
        console.log(enteredPassword);
        if(enteredPassword.trim().length === 0 ||enteredUsername.trim().length === 0) {
            return;
        }
        //TODO: preveri najprej geslo, a ga moreš hashat preden ga pošlješ na server?.. verjetno
        //poglej ce obstaja user to je 
        
        //TODO: pojdi v bazo po ime in priimek za display, vzemi kar vse podatke razen gesla, rabiš tudi id, da veš katere projekte bo lahko gledal...

        try {
            
            const response = await fetch(`http://192.168.38.164:5000/users/${enteredUsername}?passoword=${enteredPassword}`);//?pass=${enteredPassword}
            const jsonData = await response.json();
            loginCtx.addUser(enteredUsername,jsonData.ime,jsonData.priimek);
        } catch (error:any) {
            console.error(error.message);
        }
        //loginCtx.addUser(enteredUsername);
        userRef.current!.value= '';
        passRef.current!.value= '';
        props.onCancelClick();
    }
    // const onPasswordChange= (event:React.FormEvent<HTMLInputElement>) =>{
    //     let length =event.currentTarget.value.length;
    //     let tempass='';
    //     for(let i= 0; i < length;i++){
    //         tempass=tempass.concat('*');
    //     }

    //     setPass((prev)=> [tempass,event.currentTarget.value]);
    // }
    return (
      <section className={classes.auth}>
        <h1>Log In</h1>
        <form onSubmit={onSubmitHanlder}>
          <div className={classes.control}>
            <label htmlFor="username">Username or Email</label>
            <input type="text" id="username" ref={userRef}></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passRef}></input>
            <input type="submit" value="Submit"></input>
          </div>
          <div className={classes.actions}>
            <button>Cancel</button>
            <button>Log In</button>
          </div>
        </form>
      </section>
    );
}
export default Login;