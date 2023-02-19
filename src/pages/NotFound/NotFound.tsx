import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="page-error">
      <h1>Error 404</h1>
      <p>Page not found</p>
      <img src="/assets/img/error-404.png" alt="page error 404" />
      <Link data-testid="link" to={'/'}>
        Go home
      </Link>{' '}
    </div>
  );
};

export default NotFound;
