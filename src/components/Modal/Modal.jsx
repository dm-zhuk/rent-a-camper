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
  Layout,
  PopUpFeatures,
  PopUpHeader,
  PopUpTitleHolder,
  CloseBtn32,
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
} from '../AdvertForm/index';

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

const CardModalData = advItem => {
  return (
    <CardContainerModal>
      <PopUpFeatures>
        <PopUpHeader>
          <PopUpTitleHolder>
            <H1>NAME</H1>
            {/* <H1>{advItem.name}</H1> */}
            <CloseBtn32 src={close} alt="close icon" />
          </PopUpTitleHolder>
          <PopUpTitleContent>
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
            <H1>€{advItem.price},00</H1>
          </PopUpTitleContent>
        </PopUpHeader>
        <PopUpContentBox>
          <>
            {advItem.gallery && advItem.gallery.length > 0 && (
              <ImgsContainer>
                {advItem.gallery.map(img => (
                  <ImgThumb key={img._id} src={img} alt="van photo" />
                ))}
              </ImgsContainer>
            )}
          </>
          <AdvertFullText>{advItem.description}</AdvertFullText>
          <FeatureReviewBox>
            <FeatureReviewTitles>
              <FeatureReviewTitle>Features</FeatureReviewTitle>
              <FeatureReviewTitle>Reviews</FeatureReviewTitle>
              <VectorLine1 src={vector_line1} alt="line" />
            </FeatureReviewTitles>
            <FeatureBox>
              <CategoryButton>
                <IconThumb20 src={adults} alt="adults capacity" />
                <CategoryText>{advItem.adults} adults</CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={automatic} alt="transmission" />
                <CategoryText>{advItem.transmission}</CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={ac} alt="AC" />
                <CategoryText>{advItem.details.airConditioner} AC</CategoryText>
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
                <IconThumb20 src={airConditioner} alt="AC2" />
                <CategoryText>
                  {advItem.details.airConditioner} air conditioner
                </CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={cd} alt="CD" />
                <CategoryText>{advItem.details.cd}</CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={radio} alt="radio" />
                <CategoryText>{advItem.details.radio}</CategoryText>
              </CategoryButton>
              <CategoryButton>
                <IconThumb20 src={hob} alt="hob" />
                <CategoryText>{advItem.details.hob} hobs</CategoryText>
              </CategoryButton>
            </FeatureBox>
          </FeatureReviewBox>
        </PopUpContentBox>
      </PopUpFeatures>
    </CardContainerModal>
  );
};

export default CardModalData;
// import CardModalData from '../Modal/Modal';
