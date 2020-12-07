import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";

//("@material-ui/core");
export default function Story({ image, profileSrc, title }) {
  return (
    <div className="Story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story_avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}
