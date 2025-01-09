
import { Link } from "react-router-dom";
import { ImageView } from "shared/ui/imageView";
import "./CardRead.scss";
export const CardRead = (props: any) => {
  let date = new Date(props.date);
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;
  return (
    <Link to={"/read/" + props.url}>
    <div className="CardRead shadow__style">
      <div className="CardRead__img__wrap">
        <ImageView url={props.src} />
      </div>
      <div className="CardRead_content">
        <div className="CardRead_top-bar">
          <div className="CardRead_wrap_date">
            <span>{date.toLocaleString("ru-DE", options)}</span>
          </div>
          <div className="CardRead__type">
            #{props.type === "News" ? "Новость" : "Профилактика"}
          </div>
        </div>
        <div className="CardRead_title">
          {" "}
          <h3>{props.title}</h3>
        </div>
        <div className="CardRead_text-container">
          <div className="truncate-text">{props.text}</div>
        </div>
     
      </div>
    </div>
    </Link>
  );
};
