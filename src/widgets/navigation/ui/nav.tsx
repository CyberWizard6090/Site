import "./nav.scss";

import { useState, useEffect } from "react";
import { elements } from "../config/elements";
import { Item } from "./Item";
import { Tree } from "./Tree";
import { NavMobile } from "./navMobile";
export const Nav = () => {
  const url = "/api/globals/nav?locale=undefined&draft=false&depth=0";
  const [layout, setPageData] = useState([]);
  const [state, setState] = useState(false);
 
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
<NavMobile toggleState={toggleState} state={state}/>
      <aside className={`nav  ${state ? "nav--active" : ""} shadow__style` }>
       
          <nav className="nav__container">
            <ul className="nav__list-item">
              <Item label={"Главная"} link={"/"} />
              <Item label={"Отзыв"} link={"/feedback"} />
              <Item label={"Новости и профилактика"} link={"/article"} />
              <Tree label={"Персонал и отделения"} list={undefined}>
                <Item label={"Персонал"} link={"/personnel"} />
                <Item label={"Отделения"} link={"/departments"} />
              </Tree>
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
        
      </aside>
    </>
  );
};
