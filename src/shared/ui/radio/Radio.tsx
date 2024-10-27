import React from 'react'

type Props = {
    ID:string;
    Name:string;
    Value?:string;
    isSelected?:boolean;
}

export const Radio = ({ID,Name,Value,isSelected}: Props) => {
  return (
    <div className='Radio'>
    <input type="radio" id={ID}  value={Value} />
    <label htmlFor={ID}>{Name}</label>
</div>

  )
}
