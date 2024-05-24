import {
  CheckRadioInput,
  FiltersContainer,
  FiltersTypeInput,
  CheckRadioLabel,
} from '../components/CitySearch/index';

const CheckBox = ({ name, svg, label }) => {
  return (
    <CheckRadioInput>
      <FiltersContainer>
        <FiltersTypeInput type="checkbox" id={name} />
        <CheckRadioLabel htmlFor={name}>
          {svg}
          {label}
        </CheckRadioLabel>
      </FiltersContainer>
    </CheckRadioInput>
  );
};

export default CheckBox;
