import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/advert/operations';
import { selectAdvert } from '../../redux/advert/selectors';
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
  console.log(dispatch);
  const data = useSelector(selectAdvert);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  if (data.loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (data.error) {
    return <div>Error: {data.error}</div>;
  }

  if (!data.reviews) {
    return <div>No reviews available.</div>;
  } // temp snippet

  const handleModal = () => {
    // path to modal window
    console.log('Opening modal window:', handleModal);
    ////
  };

  const handleClick = () => {
    ////
    console.log('Next page opened');
  };

  return (
    <CardsContainer>
      <CardContainer key={data._id}>
        <CardFrame>
          <ImgThumb src={'gallery'} alt="camper img" />
          <CardContent>
            <CardTitleHolder>
              <CardTitle>
                <H1>{data.name}Mavericks</H1>
                <PriceFavoriteWrapper>
                  <H1>€{data.price}8000.00</H1>
                  <Favorite />
                </PriceFavoriteWrapper>
              </CardTitle>
              <ReviewLocationWrapper>
                <IconTextWrapper>
                  <IconThumb16 src={star} alt="review star" />
                  <ReviewRate>
                    {/* {data.rating} ({data.reviews.length} Reviews) */}4.4 (2
                    Reviews)
                  </ReviewRate>
                </IconTextWrapper>
                <IconTextWrapper>
                  <IconThumb16 src={map_pin} alt="map pin" />
                  <BodyText>{data.location}Kyiv, Ukraine</BodyText>
                </IconTextWrapper>
              </ReviewLocationWrapper>
            </CardTitleHolder>
            <CardAdvert>
              {data.description}Embark on an unforgettable journey with the Road
              Bear C 23-25, embark
            </CardAdvert>
            <SegmentedPicker>
              <CategoryButton>
                <IconThumb20 src={adults} alt="adults max" />
                <BodyText>{data.adults}2 adults</BodyText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={automatic} alt="transmission" />
                <BodyText>{data.transmission}Automatic</BodyText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={petrol} alt="engine" />
                <BodyText>{data.engine}Petrol</BodyText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={kitchen} alt="kitchen" />
                <BodyText>{data.kitchen}1 kitchen</BodyText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={beds} alt="beds qty" />
                <BodyText>{data.beds}3 beds</BodyText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={ac} alt="AC" />
                <BodyText>{data.airConditioner}1 AC</BodyText>
              </CategoryButton>
            </SegmentedPicker>
            <Button onClick={handleModal}>Show more</Button>
          </CardContent>
        </CardFrame>
      </CardContainer>
      <LoadMore onClick={handleClick}>Load more</LoadMore>
    </CardsContainer>
  );
};

export default AdvertForm;
