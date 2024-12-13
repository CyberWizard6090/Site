import React from 'react'
import { MaskedInput } from '../MaskedInput/MaskedInput';

type Props = {
  label: string
}

export const InputPhone = ({label}: Props) => {
    const validatePhoneNumber = (value: string): boolean => {
        // Проверяем, что номер телефона соответствует формату +7 (123) 456-78-90
        const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        return phoneRegex.test(value);
      };
  return (
    <div className='input_container'>
    <label>{label}</label>
    <MaskedInput
      mask="+7 (999) 999-99-99"
      validate={validatePhoneNumber}
      onValidChange={(value) => console.log('Валидное значение:', value)}
    />
  </div>
  )
}

