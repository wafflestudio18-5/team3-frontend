import React from "react";

import LoginInfo from "./LoginInfo";
import MyPosts from "./MyPosts";
import "./MainProfile.css";

import ad_1 from "../../Images/Ad/ad_1.png";
import ad_2 from "../../Images/Ad/ad_2.png";
import ad_3 from "../../Images/Ad/ad_3.png";

function MainProfile() {
  return (
    <aside className="aside-left">
      <LoginInfo />
      <MyPosts />
      <img className="ad-sm" src={ad_1} alt="ad 1" />
      <img className="ad-sm" src={ad_2} alt="ad 2" />
      <img className="ad-sm" src={ad_3} alt="ad 3" />
    </aside>
  );
}

export default MainProfile;
