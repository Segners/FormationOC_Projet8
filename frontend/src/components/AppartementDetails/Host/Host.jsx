import React from "react";
import "../../style.css";

function Host({ name, picture }) {
  const [firstName, lastName] = name.split(" ");
  return (
    <div className="host">
      <div className="host-name">
        <div className="host-firstname">{firstName}</div>
        <div className="host-lastname">{lastName}</div>
      </div>
      <img src={picture} alt={name} className="host-picture" />
    </div>
  );
}

export default Host;
