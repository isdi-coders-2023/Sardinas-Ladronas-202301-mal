import React from 'react';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import { provisionalData } from '../../data';

const Detail = () => {
  return <DetailHeader recipe={provisionalData[0]} />;
};

export default Detail;
