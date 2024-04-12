import Map from "../components/Map";
import NOK from "../components/NOK";
import Gosuslugi from "../components/Gosuslugi";
import National from "../components/National";
import ImageView from "../components/ImageView";
import photo from "../asset/image/ALjDyRGtIZQ.jpg";
import Video from "../components/Videoplayer/VideoPlayer";
const HomeScreen = () => {
  return (
    <div className="home-box">
      {/* <div className="photo_org_wrap">
        <img src={photo} alt="" />
      </div> */}
      <div className="" id="info">
      <span>  Юридический адрес Забайкальский край, Г. Чита, улица Ленинградская, д 104 </span> 
      <span>  График работы медицинского учреждения</span>
      <span> Пн - Чт: 08:45 - 17:00</span>
      <span>Пт:
        08:45 - 16:45</span>
     <span>  Сб, Вс: Выходной</span>
      
      </div>
      {/* <div id="Video" className="color_lv_1-2">
        <Video
          List={[
            {
              Title: "GODS",
              Preview: "",
              Video: "video1.mp4",
            },
            {
              Title: "SawanoHiroyuki",
              Preview: "",
              Video: "SawanoHiroyuki.mp4",
            },
            {
              Title: "AESPA",
              Preview: "",
              Video: "video3.mp4",
            },
            {
              Title: "STEEL",
              Preview: "",
              Video: "video4.mp4",
            },
            {
              Title: "Japan trap",
              Preview: "",
              Video: "Y2mate.mp4",
            },
          ]}
        />
      </div> */}
      <div id="QR" className="">
        <ImageView src={"QR_CODE.png"} />
      </div>

   

      <div id="QR2" className="color_lv_1-2">
        <h4>
          Чтобы оценить условия предоставления услуг используйте QR-код или
          перейдите по ссылке ниже.
        </h4>
        <ImageView src={"QR_CODE2.png"} />
        <a href="https://bus.gov.ru/qrcode/rate/440387"> перейти на сайт </a>
      </div>

      {/* <National /> */}
      <Gosuslugi />
      {/* <Map /> */}
    </div>
  );
};

export default HomeScreen;
