import { useContext } from "react";
import { DropdownItem } from "./DropdownItem";
import { Item } from "./Item";

import { Separator } from "./Separator";
import { ViewContext } from "../Context/ViewContextProvider";
import { useSizeDisplay } from "../../hooks/useSizeDisplay";
import BTNvisually from "../BTVisually/BTVisually";
import { ReactComponent as Logo } from "./../../asset/LOGO.svg";
import { Link } from "react-router-dom";
import BTNVisuallyMenu from "../BTVisually/BTNVisuallyMenu";

const Menu = () => {
  const { stateMenuValue } = useContext(ViewContext);
  const { phone } = useSizeDisplay();
  let a: number;
  if (phone){
  if (stateMenuValue) {
    a = 0;
  } else {
    a = 120;
  }
}
else{
  a =0
}
  return (
    <div
      className="menu color-menu"
      id="Menu"
      style={{ transform: `translateY(${a}%)` }}
    >
      <div className="sidebar-header">
        <Link to={"/"}>
        <Logo />
        </Link>
      </div>
      <div className="sidebar-menu color_lv_2-0">
        <Item nameItem={"Главная"} url={"/"} />

        <Item nameItem={"Контактная информация"} url={"/contact"} />

        <Item nameItem={"Профилактика"} url={"/Prevention"} />

        <Item nameItem={"Новости"} url={"/News"} />

        <DropdownItem nameItem={"Услуги"}>
          <Item nameItem={"Платные услуги"} url={"/attendance/pay"} />
          <Item nameItem={"Бесплатные услуги"} url={"/attendance/free"} />
          <Item
            nameItem={"Платные не медицинские услуги услуги"}
            url={"/attendance/non-medical"}
          />
        </DropdownItem>
        <Item nameItem={"Отзывы"} url={"/Reviews"} />
        <Item nameItem={"Вакансии"} url={"/vacancies"} />

        <DropdownItem nameItem={"Для специалистов"}>
          <Item
            nameItem={"Информация по годовому отчету"}
            url={"/specialists/report"}
          />
          <Item
            nameItem={
              "Перечень рекомендованных обследований по профилю онкология"
            }
            url={"/specialists"}
          />
        </DropdownItem>

        <DropdownItem nameItem={"Для пациентов"}>
          <Item nameItem={"Режим работы"} url={"/working-mode"} />
          <Item
            nameItem={
              "График приема граждан руководителем медицинской организации, Заместителем главного врача "
            }
            url={"/admission"}
          />
          <Item
            nameItem={"О правилах и сроках госпитализации"}
            url={"/terms"}
          />
          <Item
            nameItem={"Права и обязанности граждан в сфере охраны труда"}
            url={"/obligations"}
          />
          <Item
            nameItem={"О правилах записи на первичный прием/ консультацию"}
            url={"/regulations"}
          />
          <Item
            nameItem={"Право на внеочередное оказание медицинской помощи"}
            url={"/extraordinary"}
          />
        </DropdownItem>

        <DropdownItem nameItem={"Структура организации"}>
          <Item
            nameItem={"Администрация"}
            url={"structure/administration/adm"}
          />
          <Item nameItem={"Поликлиника"} url={"structure/polyclinic"} />
          <Item
            nameItem={"Отделения стационара"}
            url={"structure/separation"}
          />
        </DropdownItem>

        <Item nameItem={"Программа госгарантий"} url={"/guarantees"} />

        <Item nameItem={"Лицензии"} url={"/licenses"} />

        <Item nameItem={"Документы"} url={"/documents"} />

        <Item nameItem={"Антикорупция"} url={"/anticorruption"} />

        <Item nameItem={"Сведения о медицинской организации"} url={"/About"} />

        <DropdownItem nameItem={"Aнтитеррористическая безопасность"}>
          <Item nameItem={"Видеоматериалы"} url={"antiterror/video"} />
          <Item nameItem={"Материалы"} url={"antiterror/material"} />
        </DropdownItem>
      </div>
      <div className="sidebar-bottom separator">
        <BTNVisuallyMenu />
      </div>
    </div>
  );
};

export default Menu;
