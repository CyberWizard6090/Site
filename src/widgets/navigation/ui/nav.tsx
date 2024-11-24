import "./nav.scss";

import { Theme, useTheme } from "app/theme";
import { ReactComponent as Moon } from "shared/assets/svg/bootstrap-icons-1.11.2/moon-stars-fill.svg";
import { ReactComponent as Sun } from "shared/assets/svg/bootstrap-icons-1.11.2/sun-fill.svg";
import { IconButton } from "shared/ui/iconButton";

import { useState, useEffect } from "react";
import { elements } from "../config/elements";
import { Item } from "./Item";
import { Button } from "shared/ui/button";
import { ReactComponent as Logo } from "shared/assets/svg/bootstrap-icons-1.11.2/list.svg";
import { ReactComponent as Icon2 } from "shared/assets/svg/bootstrap-icons-1.11.2/x.svg";
import { useDeviceDetect } from "shared/lib/WindowSizeListener";
export const Nav = () => {
  const { theme, toggleTheme } = useTheme();
  const [state, setState] = useState(false);
  const { isMobile } = useDeviceDetect();
  const Icon = theme === Theme.LIGHT ? Sun : Moon;

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
  const test = {
    opacity: isMobile ? 0 : 1,
    display: isMobile ? "none" : "grid",
  };
  const test2:any = {
    transition: "cubic-bezier(0.075, 0.82, 0.165, 1)",
    transform: "translateX(0%)",
    opacity: 1,
    position: "fixed",
    top: 0,
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

      <aside className="aside-left shadow__style" style={state ? test2 : test}>
        <div className="nav-container shadow__style">
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
          <IconButton
            Icon={Icon}
            onClick={toggleTheme}
            isCounterVisible={false}
            className="layout__icon"
          />
          {isMobile ? (
            <IconButton
              Icon={Icon2}
              onClick={toggleState}
              isCounterVisible={false}
            />
          ) : (
            <></>
          )}
        </div>
        </div>
      
      </aside>
    </>
  );
};
