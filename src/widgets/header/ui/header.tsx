import React from 'react'
import './header.scss'
import { VisionButton } from 'shared/ui/visionButton'
import { Search } from 'features/search'
import { Toggle } from 'shared/ui/toggle'
type Props = {}

export const Header = (props: Props) => {
  return (
    <header className='Header'>
   <Search/>
   {/* <Toggle/> */}
  <VisionButton/>
    </header>
  )
}