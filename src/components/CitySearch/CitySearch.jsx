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
  CheckBoxContainer,
  VectorLine,
  FiltersContainer,
  CheckRadioInput,
  FiltersTypeInput,
  ContentBox,
  ContentImg,
  BodyText,
  H2,
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
      <CheckBoxContainer>
        <H2>Vehicle equipment</H2>
        <VectorLine src={vector_line} alt="line" />
        <CheckRadioInput>
          <FiltersContainer>
            <FiltersTypeInput onClick={handleClick}>
              <ContentBox>
                <ContentImg src={ac} alt="AC" />
                <BodyText>AC</BodyText>
              </ContentBox>
            </FiltersTypeInput>
            <FiltersTypeInput onClick={handleClick}>
              <ContentBox>
                <ContentImg src={automatic} alt="Automatic" />
                <BodyText>Automatic</BodyText>
              </ContentBox>
            </FiltersTypeInput>
            <FiltersTypeInput onClick={handleClick}>
              <ContentBox>
                <ContentImg src={kitchen} alt="Kitchen" />
                <BodyText>Kitchen</BodyText>
              </ContentBox>
            </FiltersTypeInput>
          </FiltersContainer>
          <FiltersContainer>
            <FiltersTypeInput onClick={handleClick}>
              <ContentBox>
                <ContentImg src={tv} alt="TV" />
                <BodyText>TV</BodyText>
              </ContentBox>
            </FiltersTypeInput>
            <FiltersTypeInput onClick={handleClick}>
              <ContentBox>
                <ContentImg src={shower} alt="Shower/WC" />
                <BodyText>Shower/WC</BodyText>
              </ContentBox>
            </FiltersTypeInput>
          </FiltersContainer>
        </CheckRadioInput>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <H2>Vehicle type</H2>
        <VectorLine src={vector_line} alt="line" />
        <CheckRadioInput>
          <FiltersContainer>
            <FiltersTypeInput onClick={handleClick}>
              <ContentBox>
                <ContentImg src={van} alt="Van" />
                <BodyText>Van</BodyText>
              </ContentBox>
            </FiltersTypeInput>
            <FiltersTypeInput onClick={handleClick}>
              <ContentBox>
                <ContentImg src={van_fully_intg} alt="Fully Integrated" />
                <BodyText>Fully Integrated</BodyText>
              </ContentBox>
            </FiltersTypeInput>
            <FiltersTypeInput onClick={handleClick}>
              <ContentBox>
                <ContentImg src={van_alcove} alt="Alcove" />
                <BodyText>Alcove</BodyText>
              </ContentBox>
            </FiltersTypeInput>
          </FiltersContainer>
        </CheckRadioInput>
        <Button type="button" text="Search" onClick={handleSearch}></Button>
      </CheckBoxContainer>
    </LeftSection>
  );
};

export default CitySearch;
