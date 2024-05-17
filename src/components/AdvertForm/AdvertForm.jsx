import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/advert/operations';
import {
  selectAdvert,
  selectLoader,
  selectError,
} from '../../redux/advert/selectors';
import Loader from 'components/Loader/Loader';
import {
  CardsContainer,
  CardContainer,
  CardFrame,
  CardContent,
  ImgThumb,
  CardTitleHolder,
  CardTitle,
  H1,
  PriceFavoriteWrapper,
  Favorite,
  ReviewLocationWrapper,
  IconTextWrapper,
  IconThumb16,
  IconThumb20,
  ReviewRate,
  CardAdvert,
  SegmentedPicker,
  BodyText,
  CategoryButton,
  Button,
  LoadMore,
} from './index';

import star from 'img/star.svg';
import map_pin from 'img/map_pin.svg';
import adults from 'img/adults.svg';
import automatic from 'img/automatic.svg';
import petrol from 'img/petrol.svg';
import kitchen from 'img/kitchen.svg';
import beds from 'img/beds.svg';
import ac from 'img/ac.svg';

const AdvertForm = () => {
  const dispatch = useDispatch();
  const advert = useSelector(selectAdvert);
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  /* 
  const handleModal = () => {
    // path to modal window
    console.log('Opening modal window:', handleModal);
    ////
  };

  const handleClick = () => {
    ////
    console.log('Next page opened', handleClick);
  };
 */
  return (
    <CardsContainer>
      {advert &&
        Object.keys(advert).map(key => (
          <CardContainer key={key}>
            <CardFrame>
              {advert[key].gallery && advert[key].gallery.length > 0 && (
                <ImgThumb src={advert[key].gallery[0]} alt="camper img" />
              )}
              {getCardData(advert[key])}
            </CardFrame>
          </CardContainer>
        ))}
      <LoadMore>Load more</LoadMore>
    </CardsContainer>
  );
};

const getCardData = advItem => {
  return (
    <CardContent>
      <CardTitleHolder>
        <CardTitle>
          <H1>{advItem.name}</H1>
          <PriceFavoriteWrapper>
            <H1>€{advItem.price},00</H1>
            <Favorite />
          </PriceFavoriteWrapper>
        </CardTitle>
        <ReviewLocationWrapper>
          <IconTextWrapper>
            <IconThumb16 src={star} alt="review star" />
            <ReviewRate>
              {advItem.rating} ({advItem.reviews.length} Reviews)
            </ReviewRate>
          </IconTextWrapper>
          <IconTextWrapper>
            <IconThumb16 src={map_pin} alt="map pin" />
            <BodyText>{advItem.location}</BodyText>
          </IconTextWrapper>
        </ReviewLocationWrapper>
      </CardTitleHolder>
      <CardAdvert>{advItem.description}</CardAdvert>
      <SegmentedPicker>
        <CategoryButton>
          <IconThumb20 src={adults} alt="adults max" />
          <BodyText>{advItem.adults} adults</BodyText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={automatic} alt="transmission" />
          <BodyText>{advItem.transmission}</BodyText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={petrol} alt="engine" />
          <BodyText>{advItem.engine}</BodyText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={kitchen} alt="kitchen" />
          <BodyText>{advItem.details.kitchen} Kitchen</BodyText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={beds} alt="beds qty" />
          <BodyText>{advItem.details.beds} beds</BodyText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={ac} alt="AC" />
          <BodyText>{advItem.details.airConditioner} AC</BodyText>
        </CategoryButton>
      </SegmentedPicker>
      <Button>Show more</Button>
    </CardContent>
  );
};

export default AdvertForm;

/* <Button onClick={handleModal}>Show more</Button> */
