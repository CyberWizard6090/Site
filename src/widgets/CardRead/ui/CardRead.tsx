import React from "react";
import PropTypes from "react";
// import Image from './Image';
import { Link } from "react-router-dom";
import { Button } from "shared/ui/button";
import "./CardRead.scss";
import { ImageView } from "shared/ui/imageView";
export const CardRead = (props: any) => {
  let date = new Date(props.date);
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;
  return (
    <div className="CardRead shadow__style">
      <div className="CardRead__img__wrap">
        <ImageView url={props.src} />
      </div>
      <div className="CardRead_content">
        <div className="CardRead_top-bar">
          <div className="CardRead_wrap_date">
            <span>{date.toLocaleString("ru-DE", options)}</span>
          </div>
          <div className="CardRead__type">#{
          props.type==="News"? 'Новость':'Профилактика'
          }</div>
        </div>

        <div className="CardRead_title">
          {" "}
          <h2>{props.title}</h2>
        </div>

        <div className="CardRead_text-container">
          <div className="truncate-text">{props.text}</div>
        </div>
        <div className="CardRead_bottom-bar">
          {/* let a =  {props.url} */}
          <Link to={"/read/" + props.url}>
            <Button>Читать</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
