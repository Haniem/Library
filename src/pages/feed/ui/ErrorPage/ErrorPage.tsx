import React from 'react';
import cls from './ErrorPage.module.scss';
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string };
  console.error(error);

  return (
    <div className={cls.test} id='error-page'>
      <h1>404</h1>
      <p>Sorry, an unexpected error has occurred!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
