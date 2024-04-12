import React from 'react';
import BTVisually from '../BTVisually/BTVisually';
import BtnMenu from './BtnMenu';
import { HamburgerExit } from '../buttons/HamburgerExit';

const MobileMenu = () => {
  return (
    <div id='MobileMenu'>
        {/* <BtnMenu/> */}
        <HamburgerExit/>
          <BTVisually />
    </div>
  );
}

export default MobileMenu;
