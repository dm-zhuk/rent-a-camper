import ShowMoreModal from './ShowMore';

import styles from '../components/AdvertForm/index.module.scss';

import location from 'img/location.svg';
import star from 'img/star.svg';
import automatic from 'img/automatic.svg';
import petrol from 'img/petrol.svg';
import kitchen from 'img/kitchen.svg';
import beds from 'img/beds.svg';
import ac from 'img/ac.svg';

const CardData = advItem => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.cardTitleHolder}>
        <div className={styles.cardTitle}>
          <h1 className={styles.h1}>{advItem.name}</h1>
          <div className={styles.priceFavoriteWrapper}>
            <h1 className={styles.h1}>€{advItem.price},00</h1>
            <button type="button" className={styles.favorite} />
          </div>
        </div>
        <div className={styles.reviewLocationWrapper}>
          <div className={styles.iconTextWrapper}>
            <img className={styles.iconThumb16} src={star} alt="review star" />
            <p className={styles.reviewRate}>
              {advItem.rating} ({advItem.reviews.length} Reviews)
            </p>
          </div>
          <div className={styles.iconTextWrapper}>
            <img src={location} alt="location" />
            <p className={styles.bodyText}>{advItem.location}</p>
          </div>
        </div>
      </div>
      <p className={styles.cardAdvert}>{advItem.description}</p>
      <div className={styles.segmentedPicker}>
        <button type="button" className={styles.categoryButton}>
          <img className={styles.iconThumb20} src={''} alt="capacity" />
          <p className={styles.categoryText}>{''} adults</p>
        </button>
        <button type="button" className={styles.categoryButton}>
          <svg
            className={styles.iconThumb20}
            src={automatic}
            alt="transmission"
          />
          <p className={styles.categoryText}>{advItem.transmission}</p>
        </button>
        <button type="button" className={styles.categoryButton}>
          <img className={styles.iconThumb20} src={petrol} alt="engine" />
          <p className={styles.categoryText}>{advItem.engine}</p>
        </button>
        <button type="button" className={styles.categoryButton}>
          <img className={styles.iconThumb20} src={kitchen} alt="kitchen" />
          <p className={styles.categoryText}>
            {advItem.details.kitchen} Kitchen
          </p>
        </button>
        <button type="button" className={styles.categoryButton}>
          <img className={styles.iconThumb20} src={beds} alt="beds qty" />
          <p className={styles.categoryText}>{advItem.details.beds} beds</p>
        </button>
        <button type="button" className={styles.categoryButton}>
          <img className={styles.iconThumb20} src={ac} alt="AC" />
          <p className={styles.categoryText}>
            {advItem.details.airConditioner} AC
          </p>
        </button>
      </div>
      <button
        className={styles.button}
        type="button"
        text="Show more"
        onClick={ShowMoreModal}
      ></button>
    </div>
  );
};

export default CardData;
