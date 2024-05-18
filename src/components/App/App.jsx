import React from 'react';
import { MainContainer, LeftSection, RightSection } from './index';
import AdvertForm from 'components/AdvertForm/AdvertForm';
import CitySearch from 'components/CitySearch/CitySearch';
import Modal from 'components/Modal/Modal';

const App = () => {
  return (
    <>
      <MainContainer>
        {/* <LeftSection>
          <CitySearch />
        </LeftSection>
        <RightSection>
          <AdvertForm />
        </RightSection> */}
        <Modal />
      </MainContainer>
    </>
  );
};

export default App;
