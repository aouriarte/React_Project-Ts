import { useState, useEffect } from "react";
import { User } from "./types";
import ListUsers from "./components/ListUsers";
import AddUser from "./components/AddUser";
import "./App.css";

interface AppState {
  users: User[]; // Array<User>
}

const Initial_State = [
  {
    name: "Alexis",
    lastName: "Uriarte",
    nick: "@aouriarte",
    avatar:
      "https://static.wikia.nocookie.net/king-of-thieves/images/a/ab/White_shadow.png",
  },
];

function App() {
  const [users, setUsers] = useState<AppState["users"]>([]);

  useEffect(() => {
    setUsers(Initial_State);
  }, []);

  // guardar datos del form
  const handleNewUser = (newUser: User): void => {
    setUsers((users) => [...users, newUser]);
  };

  return (
    <div className="App">
      <ListUsers users={users} />
      <AddUser onNewUser={handleNewUser} />
    </div>
  );
}

export default App;
