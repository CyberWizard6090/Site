import { useEffect, useState } from 'react';

import './NewsBlock.scss';
import { CardRead } from 'entities/CardRead';
import { Article } from 'shared/types/article';
export const NewsBlock = () => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetch('/api/article?limit=3')
      .then((response) => response.json())
      .then((data) => {
        setPageData(data.docs);
      })
      .catch((err) => {
        console.error('Error fetching articles:', err.message);
      });
  }, []);
  return (
    <div className="NewsBlock">
      <h2>Новости</h2>
      <div className="NewsBlock_wrap">
        {pageData.map((item: Article, index) => (
          <CardRead key={index} article={item} />
        ))}
      </div>
    </div>
  );
};
