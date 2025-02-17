import { Link } from 'react-router-dom';
import './CardRead.scss';
import { Article } from 'shared/types/article';
import clsx from 'clsx';
type CardReadProps = {
  article: Article;
};
export const CardRead = ({ article }: CardReadProps) => {
  const date = new Date(article.date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;
  return (
    <Link to={`/read/${article.id}`} className="CardRead__link">
      <div className="CardRead shadow__style">
        <div className="CardRead__img__wrap">
          <img src={article.wallpaper.sizes.tablet.url || ''} alt={article.title} loading="lazy" />
        </div>
        <div className="CardRead_content">
          <div className="CardRead_top-bar">
            <div className="CardRead_wrap_date">
              <span>{date.toLocaleString('ru-DE', options)}</span>
            </div>
            <div className="CardRead__type">
              #{article.type === 'News' ? 'Новость' : 'Профилактика'}
            </div>
          </div>
          <div
            className={clsx('CardRead_title', {
              'CardRead__type--news': article.type === 'News',
              'CardRead__type--prevention': article.type !== 'News',
            })}
          >
            <h3>{article.title}</h3>
          </div>
          <div className="CardRead_text-container">
            <div className="truncate-text">{article.text}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
