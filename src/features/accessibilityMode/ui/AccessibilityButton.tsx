import { RootState } from 'app/stores';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from "shared/assets/svg/bootstrap-icons-1.11.2/eye-fill.svg";
import { Button } from 'shared/ui/button';
import { SelectState } from '../model/selectors';
import { toggleMode } from '../model/accessibilityModeSlice';

type Props = {}

export const AccessibilityButton = (props: Props) => {
    const dispatch = useDispatch();
  const handleToggleMode = () => dispatch(toggleMode());

  const active = useSelector((state: RootState) => SelectState(state));
  if (!active) {
  return (
     <Button Icon={Logo} onClick={handleToggleMode}>Версия для слабовидящих</Button>
  )}
  else {
   return <></>
  }
}

