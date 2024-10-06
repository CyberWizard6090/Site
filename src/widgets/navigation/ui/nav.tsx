import "./nav.scss";

import { Theme, useTheme } from "entities/theme";
import { ReactComponent as Moon } from "shared/assets/icons/moon.svg";
import { ReactComponent as Sun } from "shared/assets/icons/sun.svg";
import { IconButton } from "shared/ui/iconButton";

import React, { useState, useRef, useEffect } from "react";
import { elements } from "../config/elements";
import clsx from "clsx";
import { Tree } from "./Tree";
import { Item } from "./Item";
const BASE_COLOR_LIGHT = "#ebebeb";
const HIGHLIGT_COLOR_LIGHT = "#f5f5f5";

const BASE_COLOR_DARK = "#202020";
const HIGHLIGT_COLOR_DARK = "#44444480";
type Props = {};

export const Nav = (props: Props) => {
  const { theme, toggleTheme } = useTheme();

  const Icon = theme === Theme.LIGHT ? Sun : Moon;
  const baseColor = theme === Theme.LIGHT ? BASE_COLOR_LIGHT : BASE_COLOR_DARK;
  const highlightColor =
    theme === Theme.LIGHT ? HIGHLIGT_COLOR_LIGHT : HIGHLIGT_COLOR_DARK;

  const url = "/api/globals/nav?locale=undefined&draft=false&depth=0";
  const [layout, setPageData] = useState([]);

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
  return (
    <aside className="aside-left">
      <nav className="aside-left__container-nav">
        <ul className="ui-vertical-navigation__list-item">
          <Item label={"Главная"} link={"/"} />
          <Item label={"Профилактика"} link={"/Prevention"} />
          {layout &&
            layout?.map((block: { blockType: string }, i: number) => {
              const Block = elements[block.blockType];

              if (Block) {
                return <Block {...block} />;
              }
              return null;
            })}
        </ul>
        {/* <DropdownItem nameItem={"Услуги"}>
          <ItemMenu nameItem={"Платные услуги"} url={"/attendance/pay"} />
          <ItemMenu nameItem={"Бесплатные услуги"} url={"/attendance/free"} />
          <ItemMenu
            nameItem={"Платные не медицинские услуги услуги"}
            url={"/attendance/non-medical"}
          />
        </DropdownItem>

                <ItemMenu nameItem={"Отзывы"} url={"/Reviews"} />
        <ItemMenu nameItem={"Вакансии"} url={"/vacancies"} />

        <DropdownItem nameItem={"Для специалистов"}>
          <ItemMenu
            nameItem={"Информация по годовому отчету"}
            url={"/specialists/report"}
          />
          <ItemMenu
            nameItem={
              "Перечень рекомендованных обследований по профилю онкология"
            }
            url={"/specialists"}
          />
        </DropdownItem>

        <DropdownItem nameItem={"Для пациентов"}>
          <ItemMenu nameItem={"Режим работы"} url={"/working-mode"} />
          <ItemMenu
            nameItem={
              "График приема граждан руководителем медицинской организации, Заместителем главного врача "
            }
            url={"/admission"}
          />
          <ItemMenu
            nameItem={"О правилах и сроках госпитализации"}
            url={"/terms"}
          />
          <ItemMenu
            nameItem={"Права и обязанности граждан в сфере охраны труда"}
            url={"/obligations"}
          />
          <ItemMenu
            nameItem={"О правилах записи на первичный прием/ консультацию"}
            url={"/regulations"}
          />
          <ItemMenu
            nameItem={"Право на внеочередное оказание медицинской помощи"}
            url={"/extraordinary"}
          />
        </DropdownItem>

        <DropdownItem nameItem={"Структура организации"}>
          <ItemMenu
            nameItem={"Администрация"}
            url={"structure/administration/adm"}
          />
          <ItemMenu nameItem={"Поликлиника"} url={"structure/polyclinic"} />
          <ItemMenu
            nameItem={"Отделения стационара"}
            url={"structure/separation"}
          />
        </DropdownItem>

        <ItemMenu nameItem={"Программа госгарантий"} url={"/guarantees"} />

        <ItemMenu nameItem={"Лицензии"} url={"/licenses"} />

        <ItemMenu nameItem={"Документы"} url={"/documents"} />

        <ItemMenu nameItem={"Антикорупция"} url={"/anticorruption"} />

        <ItemMenu
          nameItem={"Сведения о медицинской организации"}
          url={"/About"}
        />

        <DropdownItem nameItem={"Aнтитеррористическая безопасность"}>
          <ItemMenu nameItem={"Видеоматериалы"} url={"antiterror/video"} />
          <ItemMenu nameItem={"Материалы"} url={"antiterror/material"} />
        </DropdownItem> */}
      </nav>
      <div className="menu__bottom">
        <div
          className={clsx("layout__toggle-theme", theme)}
          title="Change theme"
        >
          <IconButton
            Icon={Icon}
            onClick={toggleTheme}
            isCounterVisible={false}
            className="layout__icon"
          />
        </div>
      </div>
    </aside>
  );
};
