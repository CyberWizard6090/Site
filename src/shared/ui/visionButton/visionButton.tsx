import React from 'react'
import './visionButton.scss'
import { ReactComponent as Logo } from 'shared/assets/svg/bootstrap-icons-1.11.2/eye-fill.svg'
type Props = {}

export const VisionButton = (props: Props) => {
  return (
    <div className='VisionButton'>
    <div className='icon'><Logo/> </div>
    <div>Версия для слабовидящих</div>
    </div>
  )
}