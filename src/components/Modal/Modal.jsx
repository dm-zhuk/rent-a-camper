import React from 'react';
import BasicDatePicker from '../../helpers/DatePicker';
// import ShowReviews from '../../helpers/ShowReviews';
import {
  ImgThumb,
  H1,
  H2,
  ReviewLocationWrapper,
  IconTextWrapper,
  IconThumb16,
  IconThumb20,
  ReviewRate,
  BodyText,
  CategoryText,
  CategoryButton,
  Button,
  ModalFeatures,
  ModalHeader,
  ModalTitleHolder,
  CloseBtn32,
  ModalTitleContent,
  ImgsContainer,
  ModalContentBox,
  AdvertFullText,
  FeatureReviewVerBox,
  FeatureReviewTitles,
  FeatureReviewTitle,
  FeatureSubtitle,
  VectorLine1,
  VectorLine2,
  FeatureTagsBox,
  CardContainerModal,
  TxtFieldBox,
  TxtField,
  VehicleDetailItem,
  VehicleItemTxt,
  FeatureReviewHorBox,
  FeaturesUnderlineBox,
  BookingBox,
  BookingHeader,
  BodyTextBooking,
  BookingItem,
  BookingItemRel,
  Input,
  TextArea,
  DatePicker,
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
import calendar from 'img/calendar.svg';

const CardModalData = modal => {
  return (
    <CardContainerModal>
      <ModalFeatures>
        <ModalHeader>
          <ModalTitleHolder>
            <H1>{modal.name}</H1>
            <CloseBtn32 src={close} alt="close icon" />
          </ModalTitleHolder>
          <ModalTitleContent>
            <ReviewLocationWrapper>
              <IconTextWrapper>
                <IconThumb16 src={star} alt="review star" />
                <ReviewRate>
                  {modal.rating} ({modal.reviews.length} Reviews)
                </ReviewRate>
              </IconTextWrapper>
              <IconTextWrapper>
                <IconThumb16 src={map_pin} alt="map pin" />
                <BodyText>{modal.location}</BodyText>
              </IconTextWrapper>
            </ReviewLocationWrapper>
            <H1>€{modal.price},00</H1>
          </ModalTitleContent>
        </ModalHeader>
        <ModalContentBox>
          <>
            {modal.gallery && modal.gallery.length > 0 && (
              <ImgsContainer>
                {modal.gallery.map(img => (
                  <ImgThumb key={img._id} src={img} alt="van photo" />
                ))}
              </ImgsContainer>
            )}
          </>
          <FeatureReviewVerBox>
            <AdvertFullText>{modal.description}</AdvertFullText>
            <FeaturesUnderlineBox>
              <FeatureReviewTitles>
                <FeatureReviewTitle>Features</FeatureReviewTitle>
                <FeatureReviewTitle>Reviews</FeatureReviewTitle>
              </FeatureReviewTitles>
              <VectorLine1 src={vector_line1} alt="line" />
            </FeaturesUnderlineBox>
            <FeatureReviewHorBox>
              <FeatureTagsBox>
                <CategoryButton>
                  <IconThumb20 src={adults} alt="adults capacity" />
                  <CategoryText>{modal.adults} adults</CategoryText>
                </CategoryButton>
                <CategoryButton>
                  <IconThumb20 src={automatic} alt="transmission" />
                  <CategoryText>{modal.transmission}</CategoryText>
                </CategoryButton>
                <CategoryButton>
                  <IconThumb20 src={ac} alt="AC" />
                  <CategoryText>{modal.details.airConditioner} AC</CategoryText>
                </CategoryButton>
                <CategoryButton>
                  <IconThumb20 src={petrol} alt="engine" />
                  <CategoryText>{modal.engine}</CategoryText>
                </CategoryButton>
                <CategoryButton>
                  <IconThumb20 src={kitchen} alt="kitchen" />
                  <CategoryText>{modal.details.kitchen} Kitchen</CategoryText>
                </CategoryButton>
                <CategoryButton>
                  <IconThumb20 src={beds} alt="beds qty" />
                  <CategoryText>{modal.details.beds} beds</CategoryText>
                </CategoryButton>
                <CategoryButton>
                  <IconThumb20 src={airConditioner} alt="AC2" />
                  <CategoryText>
                    {modal.details.airConditioner} air conditioner
                  </CategoryText>
                </CategoryButton>
                <CategoryButton>
                  <IconThumb20 src={cd} alt="CD" />
                  <CategoryText>{modal.details.cd} CD</CategoryText>
                </CategoryButton>
                <CategoryButton>
                  <IconThumb20 src={radio} alt="radio" />
                  <CategoryText>{modal.details.radio} Radio</CategoryText>
                </CategoryButton>
                <CategoryButton>
                  <IconThumb20 src={hob} alt="hob" />
                  <CategoryText>{modal.details.hob} hob</CategoryText>
                </CategoryButton>
              </FeatureTagsBox>
              <TxtFieldBox>
                <TxtField>
                  <H2>Vehicle details</H2>
                  <VectorLine2 src={vector_line2} alt="line" />
                  <VehicleDetailItem>
                    <VehicleItemTxt>Form</VehicleItemTxt>
                    <VehicleItemTxt>{modal.form}</VehicleItemTxt>
                  </VehicleDetailItem>
                  <VehicleDetailItem>
                    <VehicleItemTxt>Length</VehicleItemTxt>
                    <VehicleItemTxt>{modal.length}</VehicleItemTxt>
                  </VehicleDetailItem>
                  <VehicleDetailItem>
                    <VehicleItemTxt>Width</VehicleItemTxt>
                    <VehicleItemTxt>{modal.width}</VehicleItemTxt>
                  </VehicleDetailItem>
                  <VehicleDetailItem>
                    <VehicleItemTxt>Height</VehicleItemTxt>
                    <VehicleItemTxt>{modal.height}</VehicleItemTxt>
                  </VehicleDetailItem>
                  <VehicleDetailItem>
                    <VehicleItemTxt>Tank</VehicleItemTxt>
                    <VehicleItemTxt>{modal.tank}</VehicleItemTxt>
                  </VehicleDetailItem>
                  <VehicleDetailItem>
                    <VehicleItemTxt>Consumption</VehicleItemTxt>
                    <VehicleItemTxt>{modal.consumption}</VehicleItemTxt>
                  </VehicleDetailItem>
                </TxtField>
              </TxtFieldBox>
              <BookingBox>
                <BookingHeader>
                  <FeatureSubtitle>Book your campervan now</FeatureSubtitle>
                  <BodyTextBooking>
                    Stay connected! We are always ready to help you.
                  </BodyTextBooking>
                </BookingHeader>
                <TxtField>
                  <BookingItem>
                    <Input
                      type="text"
                      placeholder="Name"
                      pattern="[A-Za-z]{2,10}"
                      required
                      // onChange={handleChange}
                      style={{
                        '::placeholder': { color: 'rgba(16, 24, 40, 0.60)' },
                      }}
                    />
                  </BookingItem>
                  <BookingItem>
                    <Input
                      type="email"
                      placeholder="Email"
                      pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                      required
                      // onChange={handleChange}
                      style={{
                        '::placeholder': { color: 'rgba(16, 24, 40, 0.60)' },
                      }}
                    />
                  </BookingItem>
                  {/* 
                  <BookingItemRel>
                    <BasicDatePicker></BasicDatePicker>
                    <DatePicker>
                      <IconThumb20 src={calendar} alt="calendar" />
                    </DatePicker>
                  </BookingItemRel> */}
                  <BookingItemRel>
                    <Input
                      type="text"
                      placeholder="Booking date"
                      // onChange={handleChange}
                      style={{
                        '::placeholder': { color: 'rgba(16, 24, 40, 0.60)' },
                      }}
                    />
                    <DatePicker>
                      <IconThumb20 src={calendar} alt="calendar" />
                    </DatePicker>
                  </BookingItemRel>
                  <BookingItem>
                    <TextArea
                      rows="5"
                      placeholder="Comment"
                      // onChange={handleChange}
                      style={{
                        '::placeholder': { color: 'rgba(16, 24, 40, 0.60)' },
                      }}
                    />
                  </BookingItem>
                </TxtField>
                <Button type="button" text="Send"></Button>
                {/*  onClick={handleSubmit} */}
              </BookingBox>
            </FeatureReviewHorBox>
          </FeatureReviewVerBox>
        </ModalContentBox>
      </ModalFeatures>
      <TxtFieldBox></TxtFieldBox>
    </CardContainerModal>
  );
};

export default CardModalData;
// import CardModalData from '../Modal/Modal';

//  <Input type="text" onChange={handleChange} />

//  <Button onClick={handleSubmit}>Send</Button>
