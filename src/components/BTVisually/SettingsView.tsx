import { useContext, useState } from "react";
import "./../../css/BTNvisually.css";
import { useTheme } from "../../hooks/useTheme";
import { useFontSize } from "../../hooks/useFontSize";
import { ViewContext } from "../Context/ViewContextProvider";
import BTNvisually from "./BTVisually";
import Close from "./Close";

type Props = {};

const SettingsView = (props: Props) => {
  const { value } = useContext(ViewContext);
  const { theme, setTheme } = useTheme();
  const { size, setSize } = useFontSize();

  function Font() {
    let a: string = (document.querySelector(
      "input[type='radio'][name=FontSize]:checked"
    ) as HTMLInputElement)!.value;

    if (a == "1") {
      setSize("small");
    } else if (a == "2") {
      setSize("medium");
    } else if (a == "3") {
      setSize("large");
    } else if (a == "4") {
      setSize("extra-large");
    }
    console.log("344");
  }
  function TypeTheme() {
    let a: string = (document.querySelector(
      "input[type='radio'][name=TypeTheme]:checked"
    ) as HTMLInputElement)!.value;
    if (a == "1") {
      setTheme("light");
    } else if (a == "2") {
      setTheme("light-contrast");
    } else if (a == "3") {
      setTheme("dark");
    } else if (a == "4") {
      setTheme("dark-contrast");
    }
  }

  if (value) {
    return (
      <div id="SettingsView">
        <div className="block__size">
          <h3>Размер шрифта </h3>
          <div className="wrapper rate">
            <div className="form_radio_btn">
            
            </div>

            <div className="form_radio_btn">
              <input
                id="radio-12"
                type="radio"
                name="FontSize"
                value="2"
                onChange={Font}
              />
              <label htmlFor="radio-12" id="size2">
                Аа
              </label>
            </div>

            <div className="form_radio_btn">
              <input
                id="radio-13"
                type="radio"
                name="FontSize"
                value="3"
                onChange={Font}
              />
              <label htmlFor="radio-13" id="size3">
                Аа
              </label>
            </div>

            <div className="form_radio_btn">
              <input
                id="radio-14"
                type="radio"
                name="FontSize"
                value="4"
                onChange={Font}
              />
              <label htmlFor="radio-14" id="size4">
                Аа
              </label>
            </div>
          </div>
        </div>
        <div className="block__theme">
          <h3>Цветовая схема</h3>
          <div className="wrapper">
            <div className="form_radio_btn">
              <input
                id="radio-1"
                type="radio"
                name="TypeTheme"
                value="1"
                onChange={TypeTheme}
              />
              <label htmlFor="radio-1">Светлый</label>
            </div>

            <div className="form_radio_btn">
              <input
                id="radio-2"
                type="radio"
                name="TypeTheme"
                value="2"
                onChange={TypeTheme}
              />
              <label htmlFor="radio-2">Светлый контраст</label>
            </div>

            <div className="form_radio_btn">
              <input
                id="radio-3"
                type="radio"
                name="TypeTheme"
                value="3"
                onChange={TypeTheme}
              />
              <label htmlFor="radio-3">Темный</label>
            </div>

            <div className="form_radio_btn">
              <input
                id="radio-4"
                type="radio"
                name="TypeTheme"
                value="4"
                onChange={TypeTheme}
              />
              <label htmlFor="radio-4">Темный контраст</label>
            </div>
          </div>
        </div>

        <Close />
      </div>
    );
  } else {
    return <></>;
  }
};

export default SettingsView;
