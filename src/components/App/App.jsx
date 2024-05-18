import React from 'react';
import { MainContainer, LeftSection, RightSection } from './index';
import AdvertForm from 'components/AdvertForm/AdvertForm';
import CitySearch from 'components/CitySearch/CitySearch';

const App = () => {
  return (
    <>
      <MainContainer>
        <LeftSection>
          <CitySearch />
        </LeftSection>
        <RightSection>
          <AdvertForm />
        </RightSection>
      </MainContainer>
    </>
  );
};

export default App;
