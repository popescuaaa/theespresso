import React from "react";
import Sidebar from "../components/ui/Side";

const Profile = () => {
  return (
    <div className="flex col">
      <Sidebar />
      <div className="flex justify-center text-black text-xl">
        <h1>Profile</h1>
      </div>
    </div>
  );
};

export default Profile;
