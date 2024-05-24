import ShowMoreModal from './ShowMore';

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
} from '../components/AdvertForm/index';

import star from 'img/star.svg';
import map_pin from 'img/map_pin.svg';
import adults from 'img/adults.svg';
import automatic from 'img/automatic.svg';
import petrol from 'img/petrol.svg';
import kitchen from 'img/kitchen.svg';
import beds from 'img/beds.svg';
import ac from 'img/ac.svg';

const CardData = advItem => {
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
      </SegmentedPicker>
      <Button type="button" text="Show more" onClick={ShowMoreModal}></Button>
    </CardContent>
  );
};

export default CardData;
