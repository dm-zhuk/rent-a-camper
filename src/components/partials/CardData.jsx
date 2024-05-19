import {
  CardContent,
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
  // Layout,
  // PopUpFeatures,
  // PopUpHeader,
  // PopUpTitleHolder,
  // IconThumb32,
  // PopUpTitleContent,
  // ImgsContainer,
  // PopUpContentBox,
  // AdvertFullText,
  // FeatureReviewBox,
  // FeatureReviewTitles,
  // FeatureReviewTitle,
  // FeatureSubtitle,
  // VectorLine1,
  // VectorLine2,
  // FeatureBox,
} from '../AdvertForm/index';

import star from 'img/star.svg';
import map_pin from 'img/map_pin.svg';
import adults from 'img/adults.svg';
import automatic from 'img/automatic.svg';
import petrol from 'img/petrol.svg';
import kitchen from 'img/kitchen.svg';
import beds from 'img/beds.svg';
import ac from 'img/ac.svg';
import airConditioner from 'img/airConditioner.svg';
import shower from 'img/shower.svg';
import close from 'img/close.svg';
import vector_line1 from 'img/vector_line1.svg';
import vector_line2 from 'img/vector_line2.svg';
import radio from 'img/radio.svg';
import cd from 'img/cd.svg';
import hob from 'img/hob.svg';

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
          <CategoryText>{advItem.adults} adults</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={automatic} alt="transmission" />
          <CategoryText>{advItem.transmission}</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={petrol} alt="engine" />
          <CategoryText>{advItem.engine}</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={kitchen} alt="kitchen" />
          <CategoryText>{advItem.details.kitchen} Kitchen</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={beds} alt="beds qty" />
          <CategoryText>{advItem.details.beds} beds</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={ac} alt="AC" />
          <CategoryText>{advItem.details.airConditioner} AC</CategoryText>
        </CategoryButton>
        <CategoryButton>
          <IconThumb20 src={shower} alt="shower" />
          <CategoryText>{advItem.details.shower} shower</CategoryText>
        </CategoryButton>
      </SegmentedPicker>
      <Button>Show more</Button>
    </CardContent>
  );
};

export default getCardData;
