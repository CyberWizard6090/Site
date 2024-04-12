import { Link } from "react-router-dom";
import ImageView from "./ImageView";
import React from "react";
import { Button } from "./buttons/Button";
const CardRead = (props: any) => {
  const Titile = () => {
    if (props.title != "") {
      return (
        <h2 className="gk-post-card__title color_lv_1-4">{props.title}</h2>
      );
    } else {
      return <></>;
    }
  };
  const Text = () => {
    if (props.text != "") {
      return <p className="gk-post-card__text color_lv_1-4">{props.text}</p>;
    } else {
      return <></>;
    }
  };
  const Image = () => {
    return (
      <div className="gk-post-card__thumbnail">
        <div className="gk-image">
          <ImageView src={props.src} />
        </div>
      </div>
    );
  };

  return (
    <div className="Post-Card color_lv_1-2">
      <div className="gk-post-content">
        <Link to={props.url}>
          <Titile />
        </Link>
        <Link to={props.url}>
          <Text />
        </Link>
        <Image />
      </div>
      <div className="gk-post-footer">
        <p className="gk-info-date color_lv_1-5">Опубликованно: {props.date}</p>
        <Link to={props.url}>
       <Button text={"Читать"}/>
           </Link>
      </div>
    </div>
  );
};

export default CardRead;
