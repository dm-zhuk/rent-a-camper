import styles from 'components/AdvertFilter/index.module.css';
import {
  AC,
  Transmission,
  Kitchen,
  TV,
  Shower,
  Van,
  VanFullyIntg,
  VanAlcove,
} from 'components/Icons';

const CheckboxList = [
  {
    name: 'AC',
    label: 'AC',
    icon: <AC />,
  },
  {
    name: 'transmission',
    label: 'Automatic',
    icon: <Transmission />,
  },
  {
    name: 'kitchen',
    label: 'Kitchen',
    icon: <Kitchen />,
  },
  {
    name: 'TV',
    label: 'TV',
    icon: <TV />,
  },
  {
    name: 'shower',
    label: 'Shower/WC',
    icon: <Shower />,
  },
];

const RadioButtonsList = [
  {
    label: 'Van',
    value: 'panelTruck',
    icon: <Van />,
  },
  {
    label: 'Fully Integrated',
    value: 'fullyIntegrated',
    icon: <VanFullyIntg />,
  },
  {
    label: 'Alcove',
    value: 'alcove',
    icon: <VanAlcove />,
  },
];

const EquipmentCheckBox = ({ name, label, icon }) => {
  return (
    <div className={styles.contentBox}>
      <input
        type="checkbox"
        id={name}
        name={name}
        className={styles.inputHidden}
      />
      <label htmlFor={name} className={styles.checkLabel}>
        {icon}
        {label}
      </label>
    </div>
  );
};

const VecTypeRadioBtn = ({ label, icon, value }) => {
  return (
    <div className={styles.contentBox}>
      <input
        className={styles.inputHidden}
        type="radio"
        id={label}
        name="form"
        value={value}
      />
      <label htmlFor={label} className={styles.checkLabel}>
        {icon}
        {label}
      </label>
    </div>
  );
};

const getFilterParams = elements => {
  const { location, AC, transmission, kitchen, TV, shower, form } = elements;
  const details = {
    AC: AC.checked,
    transmission: transmission.checked,
    kitchen: kitchen.checked,
    TV: TV.checked,
    shower: shower.checked,
  };
  const filterParams = {};
  if (location.value) {
    filterParams.location = location.value;
  }
  if (form.value) {
    filterParams.form = form.value;
  }
  const detailsArr = Object.keys(details).filter(key => details[key] === true);
  if (detailsArr.length > 0) {
    filterParams.details = detailsArr;
  }
  return filterParams;
};

const filterData = (data, filterParams) => {
  return data.filter(item => {
    if (
      filterParams.location &&
      !item.location.toLowerCase().includes(filterParams.location.toLowerCase())
    ) {
      return false;
    }
    if (filterParams.form && item.form !== filterParams.form) {
      return false;
    }
    if (filterParams.details && filterParams.details.length > 0) {
      for (let detail of filterParams.details) {
        if (!item.details[detail]) {
          return false;
        }
      }
    }
    return true;
  });
};

export {
  CheckboxList,
  RadioButtonsList,
  EquipmentCheckBox,
  VecTypeRadioBtn,
  getFilterParams,
  filterData,
};
