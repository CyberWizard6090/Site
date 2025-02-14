import React from 'react';
import './Banner.scss';
import { Button } from 'shared/ui/button';
import { ImageView } from 'shared/ui/imageView';

type Props = {
  image?: string;
  link?: string;
  title?: string;
  buttonDisabled?: boolean;
};

export const Banner = ({ image, link = '#', title, buttonDisabled = false }: Props) => {
  return (
    <div className="banner">
      <h2 className="banner__title">{title || 'Default Title'}</h2>
      <div className="banner__image-wrapper">
        {image ? (
          <ImageView url={image} alt={title || 'Банер'} className="banner__image" />
        ) : (
          <div style={{ height: '100%' }}></div> // Пустое пространство для статичности
        )}
      </div>
      <div className="banner__content">
        {buttonDisabled ? (
          <a href={link} className="banner__link">
            <Button disabled={buttonDisabled}>Перейти</Button>
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
