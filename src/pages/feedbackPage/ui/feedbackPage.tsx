import React, { useState } from "react";
import "./feedbackPage.scss";
import { Select } from "shared/ui/Select";
import { Phone, Text, TextAria } from "shared/ui/Input";
import { FormRadio, Radio } from "shared/ui/radio";
import { Button } from "shared/ui/button";
import { Organization } from "../const/Organization";
import { BlankFieldWrapper } from "shared/ui/Blank_Field_Wrapper";
type Props = {};

export const FeedbackPage = (props: Props) => {
  const [showMessage, setShowMessage] = useState(false);
  const [typeMes, setTypeMes] = useState("");
  const [messages, setMessages] = useState("");
  const GetDATA = () => {
    // console.log(GetDataField("FIO"));
    // console.log(GetDataField("Phone"));
    // console.log(Value);
    // console.log(Value2);
    // console.log(Value3);
    // console.log(GetDataField("Type_appeal", true));
    // console.log(GetDataField("Messages"));successfully
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 30000); // 10 секунд
    fetch("http://127.0.0.1:5000/api/FeedbackMessages", {
      method: "POST",
      body: JSON.stringify({
        FIO: GetDataField("FIO"),
        Phone: GetDataField("Phone"),
        Organization: Value,
        Department: Value2,
        Doctor: Value3,
        Type_appeal: GetDataField("Type_appeal", true),
        Messages: GetDataField("Messages"),
      }),
      headers: {
        "Content-type": "multipart/form-data",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("статус", data);
      });

    switch (typeMes) {
      case "Claim":
        setMessages("Ваше жалоба принята к рассмотрению."); // жалоба Код для выполнения, если expr соответствует 'value1'
        break;
      case "Gratitude":
        setMessages(
          "Благодарим вас за теплые слова и высокую оценку нашей работы! Мы очень рады, что смогли вам помочь и оправдать ваши ожидания. Ваше доверие и поддержка для нас очень важны. Если у вас возникнут какие-либо вопросы или потребуется дополнительная помощь, пожалуйста, не стесняйтесь обращаться к нам. Мы всегда готовы помочь!"
        ); //блан=годарность Код для выполнения, если expr соответствует 'value2'
        break;
      case "Question":
        setMessages(
          "Спасибо за вопрос,Ваш запрос очень важен для нас. Мы ответим на него в ближайщеее время"
        ); // вопрос Код для выполнения, если expr соответствует 'value1'
        break;
      case "Appeal":
        setMessages("Ваше обращение принято к рассмотрению."); //обращение Код для выполнения, если expr соответствует 'value2'
        break;
      default:
        setMessages("Выберите тип обращения.");
    }
  };
  const [Value, SetValue] = useState("");
  const [Value2, SetValue2] = useState("");
  const [Value3, SetValue3] = useState("");
  const GetDataField = (id: string, radio: boolean = false) => {
    if (radio) {
      const input = document.querySelectorAll('[name="Type_appeal"]');
      let value: string = "";

      input.forEach((Item) => {
        if (Item instanceof HTMLInputElement && Item.checked) {
          if (Boolean(Item.checked)) {
            value = String(Item?.value);
          }
        }
      
      });
      return value;
    } else {
      const input = document.getElementById(id) as HTMLInputElement | null;
      const value = String(input?.value);
      return value;
    }
  };

  return (
    <div className="feedback">
      {showMessage ? (
        <div className="Messages shadow__style">
          <div className="text__mes">{messages}</div>

          <Button onClick={() => setShowMessage(false)}>Хорошо</Button>
        </div>
      ) : (
        <></>
      )}

      <div className="feedback__form shadow__style">
        <h1>Форма обратной связи</h1>
        <div className="wrap__field__form">
          <BlankFieldWrapper status={false} error_text="Введите имя">
       
            <Text NameField={"Ваше Ф.И.О."} id={"FIO"} />
          </BlankFieldWrapper>
          <BlankFieldWrapper status={false} error_text="Введите номер">
          
            <Phone labelElement={"Номер телефона"} id={"Phone"} />
          </BlankFieldWrapper>
        </div>
        <Select
          labelElement={"Выберите организацию"}
          id={"Organization"}
          SetValue={SetValue}
          options={Organization}
        />
        <Select
          labelElement={"Выберите отделение"}
          id={"Department"}
          SetValue={SetValue2}
          options={Organization}
        />
        <Select
          labelElement={"Выберите врача"}
          id={"Doctor"}
          SetValue={SetValue3}
          options={Organization}
        />

        <FormRadio Name={"Тип обращения"}>
          <Radio
            ID={"1"}
            labelElement={"Жалоба"}
            Name={"Type_appeal"}
            Value={"Жалоба"}
            onClick={() => setTypeMes("Claim")}
          />
          <Radio
            ID={"2"}
            labelElement={"Благодарность"}
            Name={"Type_appeal"}
            Value={"Благодарность"}
            onClick={() => setTypeMes("Gratitude")}
          />
          <Radio
            ID={"3"}
            labelElement={"Вопрос"}
            Name={"Type_appeal"}
            Value={"Вопрос"}
            onClick={() => setTypeMes("Question")}
          />
          <Radio
            ID={"4"}
            labelElement={"Обращение"}
            Name={"Type_appeal"}
            Value={"Обращение"}
            onClick={() => setTypeMes("Appeal")}
          />
        </FormRadio>
        <TextAria Name={"Сообщение"} id={"Messages"} />
        <Button onClick={GetDATA}>Отправить</Button>
      </div>
    </div>
  );
};
