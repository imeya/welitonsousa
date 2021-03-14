import React from 'react';
import { Image } from 'react-bootstrap';
import imageNotFound from '../../assets/images/chorando.svg';

const NotFound = () => (
  <div className="min-size-heigth circular-indicator">
    <div>
      <Image style={{ maxWidth: '30%' }} src={imageNotFound} />
      <h2>Oh não, página não encontrada</h2>
    </div>
  </div>
);

export { NotFound };
