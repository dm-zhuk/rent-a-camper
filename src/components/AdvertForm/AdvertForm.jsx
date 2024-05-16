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
  }

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
    <>
      <CardsContainer>
        <CardContainer key={data._id}>
          <CardFrame>
            <ImgThumb src={'gallery'} alt="camper img" />
            <CardContent>
              <CardTitleHolder>
                <CardTitle>
                  <H1>{data.name}</H1>
                  <PriceFavoriteWrapper>
                    <H1>€{data.price}.00</H1>
                    <Favorite />
                  </PriceFavoriteWrapper>
                  <ReviewLocationWrapper>
                    <IconTextWrapper>
                      <IconThumb16 src={star} alt="review star" />
                      <ReviewRate>
                        {/* {data.rating} ({data.reviews.length} reviews) */}
                      </ReviewRate>
                    </IconTextWrapper>
                    <IconTextWrapper>
                      <IconThumb16 src={map_pin} alt="map pin" />
                      <BodyText>{data.location}</BodyText>
                    </IconTextWrapper>
                  </ReviewLocationWrapper>
                </CardTitle>
                <CardAdvert>{data.description}</CardAdvert>
                <SegmentedPicker>
                  <CategoryButton>
                    <IconThumb20 src={adults} alt="adults max" />
                    <BodyText>Adults: {data.adults}</BodyText>
                  </CategoryButton>
                  <CategoryButton>
                    <IconThumb20 src={automatic} alt="transmission" />
                    <BodyText>{data.transmission.toUpperCase()}</BodyText>
                  </CategoryButton>
                  <CategoryButton>
                    <IconThumb20 src={petrol} alt="engine" />
                    <BodyText>{data.engine.toUpperCase()}</BodyText>
                  </CategoryButton>
                  <CategoryButton>
                    <IconThumb20 src={kitchen} alt="kitchen" />
                    <BodyText>{data.kitchen} kitchen</BodyText>
                  </CategoryButton>
                  <CategoryButton>
                    <IconThumb20 src={beds} alt="beds qty" />
                    <BodyText>Beds: {data.beds}</BodyText>
                  </CategoryButton>
                  <CategoryButton>
                    <IconThumb20 src={ac} alt="AC" />
                    <BodyText>AC: {data.airConditioner} </BodyText>
                  </CategoryButton>
                </SegmentedPicker>
              </CardTitleHolder>
            </CardContent>
            <Button onClick={handleModal}>Show more</Button>
          </CardFrame>
        </CardContainer>
        <LoadMore onClick={handleClick}>Load more</LoadMore>
      </CardsContainer>
    </>
  );
};

export default AdvertForm;
