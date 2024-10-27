import React from "react";
import "./feedbackPage.scss";
import { Dropdown } from "shared/ui/dropdown";
import { Phone, Text, TextAria } from "shared/ui/Input";
import { FormRadio, Radio } from "shared/ui/radio";
import { Button } from "shared/ui/button";
type Props = {};

export const FeedbackPage = (props: Props) => {
  return (

        <div className="feedback">
        
            <div className="feedback__form">
            <h1>Форма обратной связи</h1>
            <div className="wrap__field__form">
          <Text NameField={"Ваше имя"} />
          <Phone />
        </div>
        <Dropdown labelElement={"Выберите организацию"}></Dropdown>
        <Dropdown labelElement={"Выберите отделение"}></Dropdown>
        <Dropdown labelElement={"Выберите врача"}></Dropdown>
        <FormRadio Name={"Тип обращения"}>
<Radio ID={"1"} Name={"Жалоба"}/>
<Radio ID={"2"} Name={"Благодарность"}/>
<Radio ID={"3"} Name={"Вопрос"}/>
<Radio ID={"4"} Name={"Обращение"}/>
        </FormRadio>
        <TextAria Name={"Сообщение"}/>
        <Button >Отправить</Button>
            </div>
        </div>
       
    
  );
};
