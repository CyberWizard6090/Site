'use client';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../stores/store';

interface IProviders {
  readonly children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
