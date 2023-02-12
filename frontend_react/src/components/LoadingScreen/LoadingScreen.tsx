import React from 'react';
import { images } from '../../constants';
import './LoadingScreen.scss';

const LoadingScreen: React.FC = (): JSX.Element => {
  return (
    <div className={'app__loading'}>
      <img src={images.loading} alt={''} />
    </div>
  );
};

export default LoadingScreen;
