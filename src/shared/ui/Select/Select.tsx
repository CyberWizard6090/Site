import { FC, SetStateAction, useState } from "react";
import clsx from "clsx";
import "./Select.scss";
import { GanerateID } from "shared/lib/GanerateID";
import Select from "react-select";
type Props = {
  id?: string;
  children?: React.ReactNode;
  labelElement: string;
  SetValue: any;
  options: any
};
export const Сhoose = ({ labelElement,id ,SetValue,options}: Props) => {
  // const options: any = [
  //   {
  //     value:
  //       'ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ "ЗАБАЙКАЛЬСКИЙ КРАЕВОЙ КЛИНИЧЕСКИЙ ГОСПИТАЛЬ ДЛЯ ВЕТЕРАНОВ ВОЙН"',
  //     label:
  //       'ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ "ЗАБАЙКАЛЬСКИЙ КРАЕВОЙ КЛИНИЧЕСКИЙ ГОСПИТАЛЬ ДЛЯ ВЕТЕРАНОВ ВОЙН"',
  //   },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];
  const [isOpen, setIsOpen] = useState(false);
  // const IDGen = GanerateID(20);
  return (
    <Select
    id={id}
      options={options}
      defaultValue={ {value:  labelElement, label:  labelElement}}
      onChange={(choice) => SetValue(choice!.value)}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: "var(--btn-bg)",
          borderRadius: "var(--cr-m)",
          fontFamily:"Montserrat",
         
        }),
      }}
    />
  );
};
