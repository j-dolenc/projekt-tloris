
import React, { useRef} from "react";
import classes from './Login.module.css';
import { useContext } from "react";
import { LoginContext } from "../../store/login-context";
const Login: React.FC <{onCancelClick:() => void}> = (props) =>{
    //const [pass,setPass] = useState(['','']);
    const userRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const loginCtx = useContext(LoginContext);
    const onSubmitHanlder = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredUsername= userRef.current!.value;
        const enteredPassword= passRef.current!.value;
        console.log(enteredPassword);
        if(enteredPassword.trim().length === 0 ||enteredUsername.trim().length === 0) {
            return;
        }
        //TODO: pojdi v bazo po ime in priimek za display
        loginCtx.addUser(enteredUsername);
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
    return <section className={classes.auth}>
        <h1>Login</h1>
        <form onSubmit={onSubmitHanlder}>
            <div className={classes.control}>
            <label htmlFor='username'>Username or Email</label>
            <input type='text' id='username' ref={userRef}></input>
            </div>
            <div className={classes.control}>
           <label htmlFor='password'>Password</label>
            <input  type='password' id='password' ref={passRef}></input>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onCancelClick}>Cancel</button>
                <button>Log In</button>
            </div>
        </form>
    </section>
}
export default Login;