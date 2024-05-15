import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainContainer, LeftColumn, RightColumn } from './index';
import { fetchAll } from '../../redux/advert/operations';
import { selectAdvert, selectLoader } from '../../redux/advert/selectors';
import AdvertForm from 'components/AdvertForm/AdvertForm';
import CitySearch from 'components/CitySearch/CitySearch';
import ServiceList from 'components/ServiceList/ServiceList';
// import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

const App = () => {
  const advert = useSelector(selectAdvert);
  const isLoading = useSelector(selectLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <MainContainer>
      <LeftColumn>
        <CitySearch />
      </LeftColumn>
      <RightColumn>
        <AdvertForm />
        {isLoading ? <Loader /> : <ServiceList advert={advert} />}
      </RightColumn>
    </MainContainer>
  );
};

export default App;

/* return (
    <Container>
      <Title>✆ Phonebook ✆</Title>
      <AdvertForm />
      <SubTitle>advert</SubTitle>
      <Filter />
      {isLoading ? <Loader /> : <AdvertList advert={advert} />}
    </Container>
  ); */
