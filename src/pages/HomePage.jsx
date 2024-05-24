import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeContainer,
  ImgThumb,
  Features,
  FeatureItem,
  H1,
  H2,
  CategoryText,
  Button,
} from 'pages';
import camperFreepik from 'img/camperFreepik.webp';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <H1>Best camper rentals from trusted outdoor company!</H1>
      <ImgThumb src={camperFreepik} alt="Designed by Freepik" />
      <Features>
        <FeatureItem>
          <CategoryText>✰ Unlimited miles</CategoryText>
        </FeatureItem>
        <FeatureItem>
          <CategoryText>✔︎ Free second driver</CategoryText>
        </FeatureItem>
        <FeatureItem>
          <CategoryText>✔︎ 24/7 roadside assistance</CategoryText>
        </FeatureItem>
        <FeatureItem>
          <CategoryText>✔︎ Camping equipment included</CategoryText>
        </FeatureItem>
        <FeatureItem>
          <CategoryText>✔︎ Flexible cancellation</CategoryText>
        </FeatureItem>
      </Features>
      <Button
        type="button"
        text="Book Now"
        onClick={() => {
          navigate('/catalog');
        }}
      />
      <H2>
        Choose from our selection of fully equipped RVs available at our
        stations across Ukraine. All our models are perfect for an epic road
        trip or weekend getaway.
      </H2>
    </HomeContainer>
  );
};

export default HomePage;
