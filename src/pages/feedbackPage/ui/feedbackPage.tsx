import "./feedbackPage.scss";
import { FormFeedback } from "widgets/feedback_form";

type Props = {};

export const FeedbackPage = (props: Props) => {


  // const [typeMes, setTypeMes] = useState("");
  // const [messages, setMessages] = useState("");
  // // fetch("http://127.0.0.1:5000/api/FeedbackMessages", {
  // //   method: "POST",
  // //   body: JSON.stringify({
  // //     FIO: GetDataField("FIO"),
  // //     Phone: GetDataField("Phone"),
  // //     Organization: Value,
  // //     Department: Value2,
  // //     Doctor: Value3,
  // //     Type_appeal: GetDataField("Type_appeal", true),
  // //     Messages: GetDataField("Messages"),
  // //   }),
  // //   headers: {
  // //     "Content-type": "multipart/form-data",
  // //   },
  // // })
  // //   .then((r) => r.json())
  // //   .then((data) => {
  // //     console.log("статус", data);
  // //   });




// const showNotification =()=>{

// }


  return (
    <div className="feedback">
      <div className="feedback__form shadow__style">
        {/* <div>       <h1>Форма обратной связи</h1>
        <div className="wrap__field__form">
          <BlankFieldWrapper status={false} error_text="Введите имя">
       
            <Text NameField={"Ваше Ф.И.О."} id={"FIO"} />
          </BlankFieldWrapper>
          <BlankFieldWrapper status={false} error_text="Введите номер">
          
            <Phone labelElement={"Номер телефона"} id={"Phone"} />
          </BlankFieldWrapper>
        </div>
        <Select
          placeholder={"Выберите организацию"}
          id={"Organization"}
          SetValue={SetValue}
          options={Organization}
        />
        <Select
          placeholder={"Выберите отделение"}
          id={"Department"}
          SetValue={SetValue2}
          options={Organization}
        />
        <Select
          placeholder={"Выберите врача"}
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
        <Button onClick={GetDATA}>Отправить</Button></div> */}
        <FormFeedback  />
      </div>
    </div>
  );
};
