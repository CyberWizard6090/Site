import { App, Button, Form, FormProps, Input, Radio, Select } from "antd";
import { useState } from "react";
import { Organization } from "./const/Organization";
// import { Button } from "shared/ui/button";
import { Department } from "pages/feedbackPage/const/Department";
import "./feedback_form.scss";
import { Messege } from "./const/Messege";
import { InputPhone } from "shared/ui/form";
type Props = {
  ShowModal?: () => void;
};
type FieldType = {
  fio?: string;
  phone?: string;
  organization?: string;
  department?: string;
  doctor?: string;
  type_appeal?: string;
  messages?: string;
};
const { TextArea } = Input;

export const FormFeedback = ({ ShowModal }: Props) => {
  const { notification } = App.useApp();

  const showNotification = (notificationType: any) => {
    notification.info({
      message: "",
      description: Messege[notificationType] as string,
    });
  };
  const [componentDisabled, setComponentDisabled] = useState<boolean>(false);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    setComponentDisabled(true);
    Push(values);
    showNotification(values.type_appeal);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const Push = (values: any) => {
    fetch("http://127.0.0.1:5000/api/FeedbackMessages", {
      method: "POST",
      body: JSON.stringify({
        FIO: values.fio,
        Phone: values.phone,
        Organization: values.organization,
        Department: values.department,
        Doctor: values.doctor,
        Type_appeal: values.type_appeal,
        Messages: values.messages,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("статус", data);
      });
  };

  return (
    <>
   
      <InputPhone label={"Номер телефона"} />
      <Form
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        disabled={componentDisabled}
      >
        <h1>Форма обратной связи</h1>
        <Form.Item<FieldType>
          name="fio"
          label="Ваше Фамилия Имя Отчество (при наличии)"
          rules={[
            {
              required: true,
              message: "Пожалуйста скажите как мы к вам можем обращяться",
            },
          ]}
          required
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          name="phone"
          label="Номер телефона"
          rules={[
            {
              required: true,
              message: "Номер необходим для обратной связи с вами",
            },
          ]}
          required
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          name="type_appeal"
          label="Тип обращения"
          required
          rules={[
            { required: true, message: "Пожалуйста выбирете тип обращения" },
          ]}
        >
          <Radio.Group>
            <Radio value="Жалоба">Жалоба</Radio>
            <Radio value="Благодарность"> Благодарность </Radio>
            <Radio value="Вопрос"> Вопрос </Radio>
            <Radio value="Обращение"> Обращение</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item<FieldType> name="organization" label="Выберите организацию">
          <Select options={Organization}>
            {/* <Select.Option value="demo">Demo</Select.Option> */}
          </Select>
        </Form.Item>
        <Form.Item<FieldType> name="department" label="Выберите отделение">
          <Select options={Department}>
            {/* <Select.Option value="demo">Demo</Select.Option> */}
          </Select>
        </Form.Item>
        <Form.Item<FieldType> name="doctor" label="Выберите врача">
          <Input />
        </Form.Item>

        <Form.Item<FieldType> name="messages" label="Сообщение">
          <TextArea rows={10} />
        </Form.Item>

        <div className="feedback_form-button">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Отправить
            </Button>
          </Form.Item>
          {/* <Button theme={"transparent-blue"} onClick={onReset}>
          Сбросить
        </Button> */}
          {/* <Button onClick={handleFormSubmit}>Отправить</Button>{" "} */}
        </div>
      </Form>
    </>
  );
};
