import React, { useEffect, useState } from "react";

type Props = {
  Name: string;
};

export const TextAria = ({ Name }: Props) => {
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState(10);
  const [remainingCharacters, setRemainingCharacters] = useState(6000);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  useEffect(() => {
    const textArea = document.getElementById("myTextArea");
    setTextareaHeight(textArea.scrollHeight);
  }, [text]);

  function handleChange(e) {
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
        id="myTextArea"
        value={text}
        style={{ height: textareaHeight }}
        onChange={handleChange}
        disabled={isInputDisabled}
      ></textarea>
      <span>Осталось {remainingCharacters} символов</span>
    </div>
  );
};
