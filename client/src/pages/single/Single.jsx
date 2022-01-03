import React from "react";
import "./single.css";
import Sidebar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlepost/SinglePost";

function Single() {
  return (
    <div className="single">
      {/* post */}
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
