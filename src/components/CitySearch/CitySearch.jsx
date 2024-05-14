import React, { useState } from 'react';
import { Form, Label, Input, Button } from './index';

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
    <Form>
      <Label htmlFor="city">Location:</Label>
      <Input
        type="text"
        id="city"
        value={city}
        onChange={handleCityChange}
        placeholder="◎ City"
      />
      <Button onClick={handleSearch}>Search</Button>
    </Form>
  );
};

export default CitySearch;
