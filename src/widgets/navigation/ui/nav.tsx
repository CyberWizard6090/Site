import "./nav.scss";




import { useState, useEffect } from "react";
import { elements } from "../config/elements";
import { Item } from "./Item";
import { Button } from "shared/ui/button";
import { ReactComponent as Logo } from "shared/assets/svg/bootstrap-icons-1.11.2/list.svg";
import { ReactComponent as Icon2 } from "shared/assets/svg/bootstrap-icons-1.11.2/x.svg";
import { useDeviceDetect } from "shared/lib/WindowSizeListener";
import { ButtonTheme } from "../../../features/theme/ui/buttonTheme";
export const Nav = () => {

  const [state, setState] = useState(false);
  const { isMobile } = useDeviceDetect();


  const url = "/api/globals/nav?locale=undefined&draft=false&depth=0";
  const [layout, setPageData] = useState([]);

  // const [action, setAction] = useState("");

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLButtonElement;
      if (target) {
        if (target.getAttribute("data-action")) {
          switch (target.getAttribute("data-action")) {
            case "clicked_links":
              setState(false);
              break;
          }
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  useEffect(() => {
    fetch(url, {
      // mode: 'no-cors',
      // // method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        setPageData(data.layout);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const toggleState = () => {
    setState(!state);
  };

  return (
    <>
      {isMobile ? (
        <div className="wrap__nav___btn">
          <Button Icon={Logo} onClick={toggleState}>
            Меню
          </Button>
        </div>
      ) : (
        <></>
      )}

      <div className={`nav  ${state ? "active" : ""}`}>
        <aside className="nav-menu shadow__style">
        <nav className="aside-left__container-nav">
          <ul className="ui-vertical-navigation__list-item">
            <Item label={"Главная"} link={"/"} />
            <Item label={"Отзыв"} link={"/feedback"} />
            <Item label={"Новости и профилактика"} link={"/article"} />
            {layout &&
              layout?.map((block: { blockType: string }, i: number) => {
                const Block = elements[block.blockType];

                if (Block) {
                  return <Block {...block} />;
                }
                return null;
              })}
          </ul>
        </nav>
        <div className="menu__bottom">
         <ButtonTheme/>
          {isMobile ? (
            <div className="nav-menu-close" onClick={toggleState}>
              <Icon2/>
            </div>
          ) : (
            <></>
          )}
        </div>
        </aside>
      
      </div>
    </>
  );
};
