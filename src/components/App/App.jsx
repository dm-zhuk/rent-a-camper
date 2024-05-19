import React from 'react';
import { MainContainer, LeftSection, RightSection } from './index';
import AdvertForm from 'components/AdvertForm/AdvertForm';
import CitySearch from 'components/CitySearch/CitySearch';
import CardModalData from '../Modal/Modal';
// import ServiceList from 'components/ServiceList/ServiceList';

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
      <CardModalData />
    </>
  );
};

export default App;
