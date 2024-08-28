import React from 'react';
import { useNavigate } from 'react-router-dom';
import camperFreepik from 'img/camperFreepik.webp';
import {
  HomeContainer,
  ImgThumb,
  Features,
  FeatureItem,
  H1,
  H2,
  HomeAdvert,
  Button,
} from 'components/Home/index';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <H1>Best camper rentals from trusted outdoor company!</H1>
      <ImgThumb src={camperFreepik} alt="Image Designed by Freepik®" />
      <HomeAdvert>
        <Features>
          <FeatureItem>✔︎ Unlimited miles</FeatureItem>
          <FeatureItem>✔︎ Free second driver</FeatureItem>
          <FeatureItem>✔︎ 24/7 Roadside assistance</FeatureItem>
          <FeatureItem>✔︎ Camping equipment included</FeatureItem>
          <FeatureItem>✔︎ Flexible cancellation</FeatureItem>
        </Features>
        <Button
          type="button"
          onClick={() => {
            navigate('catalog');
          }}
        >
          Book Now
        </Button>
        <H2>
          Choose from our selection of fully equipped RVs available at our
          stations across Ukraine. All our models are perfect for an epic road
          trip or weekend getaway.
        </H2>
      </HomeAdvert>
    </HomeContainer>
  );
};

export default HomePage;
