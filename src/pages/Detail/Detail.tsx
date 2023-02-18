import React, { useEffect } from 'react';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import DetailInstructions from '../../components/DetailInstructions/DetailInstructions';
import useGetDetail from '../../hooks/useGetDetail/useGetDetail';

const Detail = () => {
  const { recipes, getDetail } = useGetDetail();
  useEffect(() => {
    getDetail();
  }, [getDetail]);

  return (
    <>
      <DetailHeader recipes={recipes} />
      <DetailInstructions recipe={recipes} />
    </>
  );
};

export default Detail;
