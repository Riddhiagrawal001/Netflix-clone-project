import React from "react";
import NavBar from "./NavBar";
import "./ProfileScreen.css";
import Avatar from "../assests/netflix_avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profile_screen">
      <NavBar />
      <div className="profile_screen_body">
        <h1>Edit Profile</h1>
        <div className="profile_screen_info">
          <img src={Avatar} alt="" />
          <div className="profile_screen_details">
            <h2>{user.email}</h2>
            <div className="profile_screen_plans">
              <h3>Plans</h3>
              <button
                className="profile_screen_signout"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
