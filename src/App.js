import { useState } from "react";
import "./App.css";
import { GlobalContext } from "./context/GlobalContext";
import { checkedUsers } from "./context/States/checkedStates";
import { usersContext } from "./context/States/GlobalStates";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  const [users, setUsers] = useState(usersContext);
  const [checked, setChecked] = useState(checkedUsers);

  return (
    <GlobalContext.Provider value={{ users, setUsers, checked, setChecked }}>
      <div className="App">
        <MainRoutes />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
