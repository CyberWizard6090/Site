import React from 'react'

type Props = {
    NameField: string
    id?: string
}

export const Text = ({NameField,id}: Props) => {
  return (
    <div className="input-container">
	<input  placeholder="Иванов Иван Иваныч" id={id} />
		<label>{NameField}</label>	
	</div>
  )
}
