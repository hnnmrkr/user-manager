import './App.css';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList"
import {useState} from "react";

function App() {
 const [users, setUsers] = useState([])

  const onAddUserHandler = (username, age) => {
   setUsers((prevUsers) => {
     return [
         ...prevUsers,
       {
         id: Math.random().toString(),
         name: username,
         age: age
       }
     ]
   })
  }
  return (
      <div>
        <AddUser onAddUser={onAddUserHandler}/>
        <UsersList users={users}/>
      </div>
  );
}

export default App;
