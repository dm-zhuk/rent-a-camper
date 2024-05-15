import React, { useState } from 'react';
import {
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
  FiltersButton,
} from './index';
import map_pin from 'img/map_pin.svg';
import vector_line from 'img/vector_line.svg';

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

  return (
    <>
      <InputForm>
        <TextInputContainer>
          <Label htmlFor="city">Location:</Label>
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
          <Label htmlFor="details">Filters:</Label>
        </TextInputContainer>
        <Button onClick={handleSearch}>Search</Button>
      </InputForm>
      <NumberInputContainer>
        <VectorLine src={vector_line} alt="line" />
        <FiltersContainer>
          <FiltersButton></FiltersButton>
        </FiltersContainer>
      </NumberInputContainer>
    </>
  );
};

export default CitySearch;
