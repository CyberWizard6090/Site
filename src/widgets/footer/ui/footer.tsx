import React, { useEffect, useState } from 'react'
import './footer.scss'
import { BlockFooter } from './BlockFooter';
type Props = {}

export const Footer = (props: Props) => {
  const url = "/api/globals/footer?locale=undefined&draft=false&depth=0";
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetch(url, {
      // mode: 'no-cors',
      // // method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        setPageData(data.List);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className='footer'>
      <div className="footer-menu shadow__style">
      <div className="footer-menu__container">
  
      {pageData.map((item:any ) => (
           
           <BlockFooter Name={item.NameBlock} List={item.List}/>
      )
    
      
      )}
    
      </div>
      </div>
    </div>
  )
}