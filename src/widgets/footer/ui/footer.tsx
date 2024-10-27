import React, { useEffect, useState } from 'react'
import './footer.scss'
type Props = {}

export const Footer = (props: Props) => {
  const url = "/api/globals/footer?locale=undefined&draft=false&depth=0";
  const [layout, setPageData] = useState([]);
  useEffect(() => {
    fetch(url, {
      // mode: 'no-cors',
      // // method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        setPageData(data);
     console.log(data)
       
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className='footer'>
      <div className="footer_wrap">
        {layout.NameBlock}
        {/* {layout.List.map((item) => {
    return (
      <div key={item.id}>
        <h3>{item.Name}</h3>
        <p>{item.Link}</p>
      </div>
    );
  })} */}
     {/* {
      layout.map(list => <div>kj[</div>

      )
     } */}
      </div>
    </div>
  )
}