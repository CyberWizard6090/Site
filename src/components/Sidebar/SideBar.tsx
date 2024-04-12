import React from "react";
import mzrf from "./../../img/banner_1.jpg";
import mzzk from "./../../img/mzzk.png";
import tfoms from "./../../img/tfoms.jpg";
import zms from "./../../img/logo-e1548227338555.png";
import gos from "./../../img/gos.gif";
import miac from "./../../img/guz_miac.jpg";
import Usefulitem from "./Usefulitem";
import NOK from "../NOK";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="" id="SideBar">
      <div className="inner__box color_lv_2-0">
        <div className="box__item">
          <div className=" name__src">
            <h3>Полезные ссылки</h3>
          </div>

          <div className="item__links__wrap">
            <Usefulitem
              src={mzrf}
              name={"Министерство здравохранения Российской Федерации"}
              url={"https://www.rosminzdrav.ru/"}
            />
            <Usefulitem
              src={mzzk}
              name={"Министерство здравоохранения Забайкальского края"}
              url={"https://www.chitazdrav.ru/"}
            />
            <Usefulitem
              src={zms}
              name={
                'Государственная страховая медицинская компания  "Забайкалмедстрах"'
              }
              url={"http://www.zms.chita.ru/"}
            />
            <Usefulitem
              src={tfoms}
              name={
                "Территориальный фонд обязательного медицинского страхования Забайкальского края"
              }
              url={"http://www.zabtfoms.ru/"}
            />

            <Usefulitem
              src={gos}
              name={"Портал государственных услуг"}
              url={"http://www.gosuslugi.ru/"}
            />

            <Usefulitem
              src={miac}
              name={'ГУЗ "Медицинский информационно-аналитический центр"'}
              url={"http://chitamiac.ru"}
            />
          </div>
          <NOK />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
