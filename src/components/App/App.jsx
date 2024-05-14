import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Title, SubTitle } from './index';
import { fetchAll } from '../../redux/advert/operations';
import { selectAdvert, selectLoader } from '../../redux/advert/selectors';
import AdvertForm from 'components/AdvertForm/AdvertForm';
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
    <Container>
      <Title>test</Title>
      <AdvertForm />
      <SubTitle>advert</SubTitle>
      {isLoading ? <Loader /> : <ServiceList advert={advert} />}
    </Container>
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
