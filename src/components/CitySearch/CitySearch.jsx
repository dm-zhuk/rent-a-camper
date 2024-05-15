import React, { useState } from 'react';
import {
  LeftSection,
  InputForm,
  Label,
  Input,
  Button,
  Map,
  TextField,
  TextInputContainer,
  NumberInputContainer,
  VectorLine,
  FiltersContainer,
  NumberInput,
  FiltersButton,
  ContentBox,
  ContentImg,
  BodyText,
} from './index';
import map_pin from 'img/map_pin.svg';
import vector_line from 'img/vector_line.svg';
import ac from 'img/ac.svg';
import automatic from 'img/automatic.svg';
import kitchen from 'img/kitchen.svg';
import tv from 'img/tv.svg';
import shower from 'img/shower.svg';
import van from 'img/van.svg';
import van_fully_intg from 'img/van_fully_intg.svg';
import van_alcove from 'img/van_alcove.svg';

const CitySearch = () => {
  const [city, setCity] = useState('');

  const handleCityChange = event => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    // search using the entered city value
    console.log('Searching for city:', city);
    ////
  };

  const handleClick = () => {
    ////
    console.log('Button clicked!');
  };

  return (
    <LeftSection>
      <InputForm>
        <TextInputContainer>
          <Label htmlFor="city">Location</Label>
          <TextField>
            <Map src={map_pin} alt="map_pin" />
            <Input
              type="text"
              id="city"
              value={city}
              onChange={handleCityChange}
              placeholder="City"
            />
          </TextField>
        </TextInputContainer>
        <Label htmlFor="details">Filters</Label>
      </InputForm>
      <NumberInputContainer>
        <h2>Vehicle equipment</h2>
        <VectorLine src={vector_line} alt="line" />
        <NumberInput>
          <FiltersContainer>
            <FiltersButton onClick={handleClick}>
              <ContentBox>
                <ContentImg src={ac} alt="AC" />
                <BodyText>AC</BodyText>
              </ContentBox>
            </FiltersButton>
            <FiltersButton onClick={handleClick}>
              <ContentBox>
                <ContentImg src={automatic} alt="Automatic" />
                <BodyText>Automatic</BodyText>
              </ContentBox>
            </FiltersButton>
            <FiltersButton onClick={handleClick}>
              <ContentBox>
                <ContentImg src={kitchen} alt="Kitchen" />
                <BodyText>Kitchen</BodyText>
              </ContentBox>
            </FiltersButton>
          </FiltersContainer>
          <FiltersContainer>
            <FiltersButton onClick={handleClick}>
              <ContentBox>
                <ContentImg src={tv} alt="TV" />
                <BodyText>TV</BodyText>
              </ContentBox>
            </FiltersButton>
            <FiltersButton onClick={handleClick}>
              <ContentBox>
                <ContentImg src={shower} alt="Shower/WC" />
                <BodyText>Shower/WC</BodyText>
              </ContentBox>
            </FiltersButton>
          </FiltersContainer>
        </NumberInput>
      </NumberInputContainer>
      <NumberInputContainer>
        <h2>Vehicle type</h2>
        <VectorLine src={vector_line} alt="line" />
        <NumberInput>
          <FiltersContainer>
            <FiltersButton onClick={handleClick}>
              <ContentBox>
                <ContentImg src={van} alt="Van" />
                <BodyText>Van</BodyText>
              </ContentBox>
            </FiltersButton>
            <FiltersButton onClick={handleClick}>
              <ContentBox>
                <ContentImg src={van_fully_intg} alt="Fully Integrated" />
                <BodyText>Fully Integrated</BodyText>
              </ContentBox>
            </FiltersButton>
            <FiltersButton onClick={handleClick}>
              <ContentBox>
                <ContentImg src={van_alcove} alt="Alcove" />
                <BodyText>Alcove</BodyText>
              </ContentBox>
            </FiltersButton>
          </FiltersContainer>
        </NumberInput>
        <Button onClick={handleSearch}>Search</Button>
      </NumberInputContainer>
    </LeftSection>
  );
};

export default CitySearch;
