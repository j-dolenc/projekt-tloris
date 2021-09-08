import React, { useState } from "react";
//import Todo from "../models/todo";

type LoginContextObj = {
  username: string;
  name: string;
  surname: string;
  addUser: (usename: string) => void;
};
export const LoginContext = React.createContext<LoginContextObj>({
  username: "",
  name: "",
  surname: "",
  addUser: (username: string) => {},
});

const LoginContextProvider: React.FC = (props) => {
  const [user, setUser] = useState({ username: "", name: "", surname: "" });
  const addUser = (username: string) => {
    let name='';
    let surname='';

    //TODO DOSTOP DO BAZE
    setUser({ username: username, name: name, surname: surname });
  };
  //   const removeItem = (id:string) => {
  //     setItems((prevState) => {
  //       return prevState.filter(todo => todo.id !== id);
  //     });
  //   }

  const contextValue: LoginContextObj = {
    username: user.username,
    name: user.name,
    surname: user.surname,
    addUser: addUser,
  };
  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginContextProvider;
