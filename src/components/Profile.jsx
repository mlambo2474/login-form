import React, { useContext } from "react";
import { loginContext } from "../Context/LoginContext";

const Profile = () => {
  const { username, setShowProfile} = useContext(loginContext);
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1745173036546-c56551790fb8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
<div className="bg-white/3 backdrop-blur-sm p-8 rounded-2xl shadow-lg w-full max-w-md text-white">

      <h1>WELCOME!</h1>
      <h2>Congratulations on your successful login. </h2>
      <h3>Your username is: {" "}<span className="font-bold">{username}</span> </h3>
      <div className="flex justify-end">
      <button onClick={()=> setShowProfile(false)} className="bg-white/20 backdrop-blur-sm p-2 px-4 mt-2 text-sm rounded-2xl ">Back</button>
    </div>
  </div>
    </div>
  );
};
export default Profile;
