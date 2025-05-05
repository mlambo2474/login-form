import SignUp from "./components/SignUp";
import Profile from "./components/profile";
import { loginContext } from "./Context/LoginContext";
import "./App.css";
import { useState } from "react";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState();

  return (
    <>
      <loginContext.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile? <Profile /> : <SignUp />}
      </loginContext.Provider>
      
    </>
  );
}

export default App;
