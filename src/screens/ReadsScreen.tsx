import { useEffect, useState } from "react";
import CardRead from "../components/CardRead";
import { useNavigate } from "react-router-dom";
const ReadsScreen = () => {
  const [posts, setPosts] = useState([]);
  const history = useNavigate();
  let link: string;
  let link2: string;
  if (window.location.origin + "/News" == window.location.href) {
    link = "news";
    link2 = "/readnews/";
  }
  if (window.location.origin + "/Prevention" == window.location.href) {
    link = "prevention";
    link2 = "/readprevention/";
  }

  useEffect(() => {
    fetch("/api/" + link)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [history]);
  return (
    <div className="read__wrap">
      <div className="read__item__contener">
        {posts.map((item: any) => (
          <CardRead
            date={item.date}
            title={item.title}
            nbut={"Читать далее"}
            text={item.text}
            src={item.image}
            url={link2 + item.id}
          />
        ))}
        <CardRead
          date={"11.1.1.1"}
          title={"Живые обои VHS для Wallpaper Engine"}
          text={
            "В финале батла лучших языков программирования за первое и второе место сразились C# и Python, за третье и четвёртое место — JS и Golang."
          }
          src={"CyberpunkGirl.png"}
          url={"/404"}
        />
        <CardRead
          date={"11.1.1.1"}
          title={"Живые обои VHS для Wallpaper Engine"}
          text={
            "В финале батла лучших языков программирования за первое и второе место сразились C# и Python, за третье и четвёртое место — JS и Golang."
          }
          src={"8.jpg"}
          url={"/404"}
        />
        <CardRead
          date={"11.1.1.1"}
          title={"Живые обои VHS для Wallpaper Engine"}
          text={
            "В финале батла лучших языков программирования за первое и второе место сразились C# и Python, за третье и четвёртое место — JS и Golang."
          }
          src={"CyberpunkGirl.png"}
          url={"/404"}
        />
      </div>
    </div>
  );
};

export default ReadsScreen;
