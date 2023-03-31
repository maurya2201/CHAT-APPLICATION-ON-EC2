import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className="navbar">
      <span className="logo">Chat Application</span>
      <div className="user">
        <img alt="chat" src={currentUser?.photoURL} />
        <span>{currentUser?.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
