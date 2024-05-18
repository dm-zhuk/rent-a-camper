import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/advert/operations';
import {
  selectAdvert,
  selectLoader,
  selectError,
} from '../../redux/advert/selectors';
// import Modal from 'components/Modal/Modal';
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
  CategoryText,
  CategoryButton,
  Button,
  LoadMore,
  // Layout,
  PopUpFeatures,
  PopUpHeader,
  PopUpTitleHolder,
  IconThumb32,
  PopUpTitleContent,
  ImgsContainer,
  PopUpContentBox,
  AdvertFullText,
  FeatureReviewBox,
  FeatureReviewTitles,
  FeatureReviewTitle,
  FeatureSubtitle,
  VectorLine1,
  VectorLine2,
  FeatureBox,
  CardContainerModal,
} from './index';

import star from 'img/star.svg';
import map_pin from 'img/map_pin.svg';
import adults from 'img/adults.svg';
import automatic from 'img/automatic.svg';
import petrol from 'img/petrol.svg';
import kitchen from 'img/kitchen.svg';
import beds from 'img/beds.svg';
import ac from 'img/ac.svg';
import close from 'img/close.svg';
import vector_line1 from 'img/vector_line1.svg';
import vector_line2 from 'img/vector_line2.svg';
import airConditioner from 'img/airConditioner.svg';
import radio from 'img/radio.svg';
import cd from 'img/cd.svg';
import hob from 'img/hob.svg';

const AdvertForm = () => {
  const dispatch = useDispatch();
  const advert = useSelector(selectAdvert);
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);

  const [cards, setCards] = useState({});

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  useEffect(() => {
    if (advert) {
      setCards(advert);
    }
  }, [advert]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  /* 
  const handleadvert = () => {
    // path to advert window
    console.log('Opening advert window:', handleadvert);
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
          <>
            {/* <CardContainerModal key={key}>
              {getCardData1(advert[key])}
            </CardContainerModal> */}
            <CardContainer key={key}>
              <CardFrame>
                {advert[key].gallery && advert[key].gallery.length > 0 && (
                  <ImgThumb src={advert[key].gallery[0]} alt="van photo" />
                )}
                {getCardData(advert[key])}
              </CardFrame>
            </CardContainer>
          </>
        ))}
      <LoadMore>Load more</LoadMore>
    </CardsContainer>
  );
};

const getCardData = advert => {
  return (
    <CardContent>
      <CardTitleHolder>
        <CardTitle>
          <H1>{advert.name}</H1>
          <PriceFavoriteWrapper>
            <H1>€{advert.price},00</H1>
            <Favorite />
          </PriceFavoriteWrapper>
        </CardTitle>
        <ReviewLocationWrapper>
          <IconTextWrapper>
            <IconThumb16 src={star} alt="review star" />
            <ReviewRate>
              {advert.rating} ({advert.reviews.length} Reviews)
            </ReviewRate>
          </IconTextWrapper>
          <IconTextWrapper>
            <IconThumb16 src={map_pin} alt="map pin" />
            <BodyText>{advert.location}</BodyText>
          </IconTextWrapper>
        </ReviewLocationWrapper>
      </CardTitleHolder>
      <CardAdvert>{advert.description}</CardAdvert>
      <SegmentedPicker>
        <CategoryButton>
          <IconThumb20 src={adults} alt="adults capacity" />
          <CategoryText>{advert.adults} adults</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={automatic} alt="transmission" />
          <CategoryText>{advert.transmission}</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={petrol} alt="engine" />
          <CategoryText>{advert.engine}</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={kitchen} alt="kitchen" />
          <CategoryText>{advert.details.kitchen} Kitchen</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={beds} alt="beds qty" />
          <CategoryText>{advert.details.beds} beds</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={ac} alt="AC" />
          <CategoryText>{advert.details.airConditioner} AC</CategoryText>
        </CategoryButton>
      </SegmentedPicker>
      <Button>Show more</Button>
    </CardContent>
  );
};
/* 
const getCardData1 = advert => {
  return (
    <CardContainerModal>
      <PopUpFeatures>
        <PopUpHeader>
          <PopUpTitleHolder>
            <H1>{advert.name}</H1>
            <IconThumb32 src={close} alt="close icon" />
          </PopUpTitleHolder>
          <PopUpTitleContent>
            <ReviewLocationWrapper>
              <IconTextWrapper>
                <IconThumb16 src={star} alt="review star" />
                <ReviewRate>
                  {advert.rating} ({advert.reviews.length} Reviews)
                </ReviewRate>
              </IconTextWrapper>
              <IconTextWrapper>
                <IconThumb16 src={map_pin} alt="map pin" />
                <BodyText>{advert.location}</BodyText>
              </IconTextWrapper>
            </ReviewLocationWrapper>
            <H1>€{advert.price},00</H1>
          </PopUpTitleContent>
        </PopUpHeader>
        <PopUpContentBox>
          <ImgsContainer>
            <ImgThumb src="" alt="van photos" />
          </ImgsContainer>
          <AdvertFullText>{advert.description}</AdvertFullText>
          <FeatureReviewBox>
            <FeatureReviewTitles>
              <FeatureReviewTitle>Features</FeatureReviewTitle>
              <FeatureReviewTitle>Reviews</FeatureReviewTitle>
              <VectorLine1 src={vector_line1} alt="line" />
            </FeatureReviewTitles>
            <FeatureBox>
              <CategoryButton>
                <IconThumb20 src={adults} alt="adults capacity" />
                <CategoryText>{advert.adults} adults</CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={automatic} alt="transmission" />
                <CategoryText>{advert.transmission}</CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={ac} alt="AC" />
                <CategoryText>{advert.details.airConditioner} AC</CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={petrol} alt="engine" />
                <CategoryText>{advert.engine}</CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={kitchen} alt="kitchen" />
                <CategoryText>{advert.details.kitchen} Kitchen</CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={beds} alt="beds qty" />
                <CategoryText>{advert.details.beds} beds</CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={airConditioner} alt="AC2" />
                <CategoryText>
                  {advert.airConditioner} air conditioner
                </CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={cd} alt="CD" />
                <CategoryText>{advert.cd}</CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={radio} alt="radio" />
                <CategoryText>{advert.radio}</CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={hob} alt="hob" />
                <CategoryText>{advert.hob} hobs</CategoryText>
              </CategoryButton>
            </FeatureBox>
          </FeatureReviewBox>
        </PopUpContentBox>
      </PopUpFeatures>
    </CardContainerModal>
  );
};
 */
export default AdvertForm;

/* <Button onClick={handleModal}>Show more</Button> */
