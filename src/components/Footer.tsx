import React from "react";
import "./../css/Footer.css";
import FooterItem from "./FooterItem";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div id="Footer" className="color_lv_1-4">
      <div className="container-fluid">
        <div className="row row-footer">
         

          <div className="col-md-3 col-sm-3 col-xs-12">
            <h2>Полезные ссылки</h2>
            <ul>
              <FooterItem
                name={"Министерство здравохранения Российской Федерации"}
                url={"https://www.rosminzdrav.ru/"}
              />
              <FooterItem
                name={"Министерство здравоохранения Забайкальского края"}
                url={"https://www.chitazdrav.ru/"}
              />
              <FooterItem
                name={'Государственная страховая медицинская компания  "Забайкалмедстрах"'}
                url={"http://www.zms.chita.ru/"}
              />
              <FooterItem
                name={"Территориальный фонд обязательного медицинского страхования Забайкальского края"}
                url={"http://www.zabtfoms.ru/"}
              />
              <FooterItem
                name={"Портал государственных услуг"}
                url={"http://www.gosuslugi.ru/"}
              />
              <FooterItem
                name={'ГУЗ "Медицинский информационно-аналитический центр"'}
                url={"http://chitamiac.ru"}
              />
            </ul>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <h2>Соц.сети</h2>
            <ul>
            <FooterItem
                name={"Вконтакте"}
                url={"https://www.rosminzdrav.ru/"}
              />
                 <FooterItem
                name={"Одноклассники"}
                url={"https://www.rosminzdrav.ru/"}
              />
          
            </ul>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <h2>График работы</h2>
            <ul>
              <li>Понедельник: 08:45 - 17:00</li>
              <li>Вторник: 08:45 - 17:00</li>
              <li>Среда: 08:45 - 17:00</li>
              <li>Четверг: 08:45 - 17:00</li>
              <li>Пятница: 08:45 - 16:45</li>
              <li>
                Суббота: <span className="color-red"> Выходной </span>
              </li>
              <li>
                Воскресенье <span className="color-red"> Выходной </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
