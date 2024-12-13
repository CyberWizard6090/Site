
import { useDispatch, useSelector } from "react-redux";
import "./Style.scss";
import { Button } from "shared/ui/button";
import { RootState } from "app/stores";
import { SelectState } from "../model/selectors";
import { FontSize, setFontSize, toggleMode } from "../model/accessibilityModeSlice";
import { Toggle } from "shared/ui/toggle";
import { RadioGroup } from "shared/ui/radioGroup";
import { useState } from "react";
import { setTheme } from "features/theme/model/themeSlice";


type Props = {};

export const AccessibilityUI = (props: Props) => {
  const dispatch = useDispatch();
  const handleToggleMode = () => dispatch(toggleMode());
  const active = useSelector((state: RootState) => SelectState(state));


  const [selectedValue, setSelectedValue] = useState<string>('');

    const handleRadioChangeFont = (value:string) => {
      console.log('Selected Value:', value);
      // setSelectedValue(value);
      dispatch(setFontSize(value));
    };
    const handleRadioChangeTheme = (value:string) => {
      console.log('Selected Value:', value);
      // setSelectedValue(value);
      dispatch(setTheme(value));
    };
  if (active) {
    return (
      <div className="AccessibilityUI">
        <div className="AccessibilityUI__block-wrap">
        <RadioGroup
        name="fontSize"
        options={[
          { label: 'Маленький', value: 'small' },
          { label: 'Средний', value: 'medium' },
          { label: 'Большой', value: 'large' },
          { label: 'Очень большой', value: 'x-large' },
          { label: 'Экстра большой', value: 'xx-large' }
        ]}
        selectedValue={selectedValue}
        onChange={handleRadioChangeFont}
      />

<RadioGroup
        name="theme"
        options={[
          { label: 'Черно-белый', value: 'black-white' },
          { label: 'Коричневый на бежевом', value: 'brown-beige' },
          { label: 'Темно-синий на голубом', value: 'dark-blue-sky' },
          { label: 'Зеленый на темно-коричневом', value: 'green-brown' },
          { label: 'Бело-черный', value: 'white-black' }
        ]}
        selectedValue={selectedValue}
        onChange={handleRadioChangeTheme}
      />
     <Toggle/>
        </div>
        <Button className="btn__exit" onClick={handleToggleMode}>
          Обычный режим
        </Button>
      </div>
    );
  }
  else{
    return <></>
  }
};
