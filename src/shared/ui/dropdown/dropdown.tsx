import { FC, SetStateAction, useState } from 'react'
import clsx from 'clsx'
import './dropdown.scss'


type Props = {
    children?: React.ReactNode;
    labelElement: string;
  
  };
export const Dropdown = ({labelElement,children}:Props) => {
const [isOpen,setIsOpen] = useState(false);
   
    return (

        <div className='dropdown'>
        <button type="button" className="{style.button}" onClick={()=>setIsOpen(!isOpen)}>
         {labelElement}
        </button>
{
    isOpen? (
        <div className="dropdown__list">
        <div className="dropdown__list__wrap">
        {children}
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
           <div>1</div>
        
        </div>
         
        </div>
    ) : (<></>)
}
     
      </div>
    );
   };