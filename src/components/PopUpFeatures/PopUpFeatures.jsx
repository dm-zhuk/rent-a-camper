import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvert } from '../../redux/advert/selectors';
import { fetchAll } from '../../redux/advert/operations';
import star from 'img/star.svg';
import map_pin from 'img/map_pin.svg';
import adults from 'img/adults.svg';
import automatic from 'img/automatic.svg';
import petrol from 'img/petrol.svg';
import kitchen from 'img/kitchen.svg';
import beds from 'img/beds.svg';
import ac from 'img/ac.svg';
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
  Layout,
} from './index';

const PopUpFeatures = () => {
  const dispatch = useDispatch();
  const advert = useSelector(selectAdvert);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <PopUpFeatures />
        <CardsContainer>
          {advert &&
            Object.keys(advert).map(key => (
              <CardContainer key={key}>
                <CardFrame>
                  {advert[key].gallery && advert[key].gallery.length > 0 && (
                    <ImgThumb src={advert[key].gallery[0]} alt="van photo" />
                  )}
                  {getCardData(advert[key])}
                </CardFrame>
              </CardContainer>
            ))}
          <LoadMore>Load more</LoadMore>
        </CardsContainer>
      </Layout>
    </>
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
          <IconThumb20 src={adults} alt="adults capacity" />
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

export default PopUpFeatures;
