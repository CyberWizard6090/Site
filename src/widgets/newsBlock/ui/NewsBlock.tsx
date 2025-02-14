import { useEffect, useState } from 'react';

import './NewsBlock.scss';
import { CardRead } from 'entities/CardRead';
export const NewsBlock = () => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetch('/api/article?limit=3', {
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
  return (
    <div className="NewsBlock">
      <h2>Новости</h2>
      <div className="NewsBlock_wrap">
        {pageData.map((item: any, index) => (
          <CardRead
            key={index}
            date={item.date}
            title={item.title}
            type={item.type}
            text={item.text}
            src={item.wallpaper.sizes.tablet.url}
            url={item.id}
          />
        ))}
      </div>
    </div>
  );
};
