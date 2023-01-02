import React from "react";
import "./ItemList.css";

function ItemList(props) {
  return (
    <div className="itemList">
      <li>
        <a target="_blank" rel="noreferrer" href={props.href}>
          <p>{props.job}</p>
        </a>
      </li>
      <p>{props.time}</p>
      <span>{props.function}</span>
    </div>
  );
}

export default ItemList;
