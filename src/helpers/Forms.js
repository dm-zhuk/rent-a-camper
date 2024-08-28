export const validateBookingForm = formValues => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'Name is required';
  } else if (
    // eslint-disable-next-line
    !/^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(
      formValues.name
    )
  ) {
    errors.name = 'Invalid name format';
  }

  if (!formValues.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
    errors.email = 'Invalid email format';
  }

  if (!formValues.date) {
    errors.date = 'Date is required';
  }

  return errors;
};

export const scrollSmoothlyTo = ref => {
  setTimeout(() => {
    if (!ref.current) return;

    window.scrollBy({
      top: window.innerHeight / 2,
      behavior: 'smooth',
    });
  }, 0);
};
