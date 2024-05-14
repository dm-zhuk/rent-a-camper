import React from 'react';
import CitySearch from 'components/CitySearch/CitySearch';
import { Wrapper, Title, Description, Button } from './index';

const AdvertForm = () => {
  return (
    <Wrapper>
      <Title>Welcome to the test page</Title>
      <CitySearch />
      <Description>Embark..</Description>
      <Button>Show more</Button>
    </Wrapper>
  );
};

export default AdvertForm;
