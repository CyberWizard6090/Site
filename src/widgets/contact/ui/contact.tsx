import React from 'react'
import './contact.scss'
type Props = {}

export const Contact = (props: Props) => {
  return (
    <div className="information_container">
        <h2>Контакты</h2>
    <div className="working shadow__style">
    <span>
      {" "}
      Г. Чита, улица Ленинградская,
      д 104{" "}
    </span>
    <span> График работы медицинского учреждения</span>
    <span> Пн - Чт: 08:45 - 17:00</span>
    <span>Пт: 08:45 - 16:45</span>
    <span> Сб, Вс: Выходной</span>
  </div>
  <div className="information_phone shadow__style">
  <h3> Контакт центр</h3>
  <div className="information_phone_grid">
    <span> 21-36-37</span>
    <span> 21-36-38</span>
    <span> 21-36-39</span>
    <span> 21-36-40</span>
    </div>
  </div>
  </div>
  )
}