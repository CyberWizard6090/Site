import React from 'react'

type Props = {
    NameField: string
}

export const Text = ({NameField}: Props) => {
  return (
    <div className="input-container">
	<input placeholder=""  />
		<label>{NameField}</label>		
	</div>
  )
}
