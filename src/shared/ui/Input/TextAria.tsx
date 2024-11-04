import React, { useEffect, useState } from "react";
import { GanerateID } from "shared/lib/GanerateID";

type Props = {
  id?: string
  Name: string;
};

export const TextAria = ({ id,Name }: Props) => {
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState(10);
  const [remainingCharacters, setRemainingCharacters] = useState(6000);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const IDGEN = GanerateID(20)
  const NUM = id? id: IDGEN
  useEffect(() => {
    const textArea = document.getElementById(NUM);
    if (textArea){
      setTextareaHeight(textArea.scrollHeight);
    }
   
  }, [text]);

  function handleChange(e: { target: { value: any; }; }) {
    setText(e.target.value);
    const { value } = e.target;
    const maxLength = 6000;
    if (value.length >= maxLength) {
      e.target.value = value.slice(0, maxLength);
      setRemainingCharacters(maxLength - value.length);
    } else {
      setRemainingCharacters(maxLength - value.length);
      setIsInputDisabled(false);
    }
  }
  return (
    <div className="TextAria">
      <span> {Name}</span>
      <textarea
        name=""
        id={NUM}
        value={text}
        style={{ height: textareaHeight }}
        onChange={handleChange}
        disabled={isInputDisabled}
      ></textarea>
      <span>Осталось {remainingCharacters} символов</span>
    </div>
  );
};
