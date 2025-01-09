import React, { useEffect, useState } from "react";

import { CardRead } from "widgets/CardRead";

import "./articlePage.scss";
type Card = {

    id: string;
    date: string;
    title: string;
    type: string;
    wallpaper: {
      sizes: {
        tablet: {
          url: string;
        };
      };
    };
    text: string;
 
}
export const ArticlePage = () => {
  
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetch("/api/article", {
      // mode: 'no-cors',
      // // method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.docs);
        setPageData(data.docs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //  if (pageData.docs !== undefined){

  //  }

  return (
    <div className="Page-Article">
      {pageData.map((item: Card) => (
        <CardRead
          date={item.date}
          title={item.title}
          type={item.type}
          text={item.text}
          src={item.wallpaper.sizes.tablet.url}
          url={item.id}
        />
      ))}
    </div>
  );
};
