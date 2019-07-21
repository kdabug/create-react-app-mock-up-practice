import "./style.css";
import React from "react";

export const Post = props => {
  return (
    <div className="c-post__container">
      <h1>{props.title}</h1>
      <p>
        chicken chicken chicken chicken chicken chicken chicken chicken chicken
        chicken chicken chicken chicken chicken chicken chicken chicken chicken
        chicken chicken chicken
      </p>
    </div>
  );
};
