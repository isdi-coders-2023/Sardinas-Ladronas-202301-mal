import React from 'react';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import DetailInstructions from '../../components/DetailInstructions/DetailInstructions';
import { meal } from '../../mocks/mealMock';

const Detail = () => {
  return (
    <>
      <DetailHeader recipe={meal.meals[0]} />
      <DetailInstructions recipe={meal.meals[0]} />
    </>
  );
};

export default Detail;
