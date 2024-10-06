import React from 'react'
import './toggle.scss'
type Props = {}

export const Toggle = (props: Props) => {
  return (
    <div className="checkbox_item citem_1 Toggle">
  
    <label className="checkbox_wrap">
        <input type="checkbox" name="checkbox" className="checkbox_inp"/>
        <span className="checkbox_mark"></span>
    </label>
    {/* <div className="title">Basic Style</div> */}
</div>
  )
}

