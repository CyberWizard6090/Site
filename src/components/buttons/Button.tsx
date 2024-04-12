import React from 'react'

type Props = {
  text:string
}

export const Button = ({text}: Props) => {
  return (
<button className="btn btn-white btn-animate">
    <span className="">{text}</span>
</button>
  )
}

 