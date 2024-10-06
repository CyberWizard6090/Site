import React from 'react'
import { Button } from 'shared/ui/button'
import { QR } from 'shared/ui/QR'
import './BusGov.scss'

type Props = {}

export const BusGov = (props: Props) => {
  return (
    <div  className="BUSGOV">
    <h4>
      Чтобы оценить условия предоставления услуг используйте QR-код или
      перейдите по ссылке ниже.
    </h4>
    <QR URL="https://bus.gov.ru/qrcode/rate/440387"/>
    <a href="https://bus.gov.ru/qrcode/rate/440387">
      {" "}
      <Button>Перейти на сайт</Button>
    </a>
  </div>
  )
}

