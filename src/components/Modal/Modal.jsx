import React from 'react';
// import BasicDatePicker from '../../helpers/DatePicker';
// import ShowReviews from '../../helpers/ShowReviews';
import styles from '../AdvertForm/index.module.scss';

import star from 'img/star.svg';
import map_pin from 'img/location.svg';
import automatic from 'img/automatic.svg';
import petrol from 'img/petrol.svg';
import kitchen from 'img/kitchen.svg';
import beds from 'img/beds.svg';
import ac from 'img/ac.svg';
import close from 'img/close.svg';
import airConditioner from 'img/airConditioner.svg';
import radio from 'img/radio.svg';
import cd from 'img/cd.svg';
import hob from 'img/hob.svg';
import calendar from 'img/calendar.svg';

const CardModalData = modal => {
  return (
    <section className={styles.cardContainerModal}>
      <div className={styles.modalFeatures}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitleHolder}>
            <h1 className={styles.h1}>{modal.name}</h1>
            <button
              type="button"
              className={styles.closeBtn32}
              src={close}
              alt="close icon"
            />
          </div>
          <div className={styles.modalTitleContent}>
            <div className={star.reviewLocationWrapper}>
              <div className={styles.iconTextWrapper}>
                <svg
                  className={styles.iconThumb16}
                  src={star}
                  alt="review star"
                />
                <p className={styles.reviewRate}>
                  {modal.rating} ({modal.reviews.length} Reviews)
                </p>
              </div>
              <div className={styles.iconTextWrapper}>
                <svg
                  className={styles.iconThumb16}
                  src={map_pin}
                  alt="map pin"
                />
                <p className={styles.bodyText}>{modal.location}</p>
              </div>
            </div>
            <h1 className={styles.h1}>€{modal.price},00</h1>
          </div>
        </div>
        <div className={styles.modalContentBox}>
          <>
            {modal.gallery && modal.gallery.length > 0 && (
              <div className={styles.imgsContainer}>
                {modal.gallery.map(img => (
                  <svg
                    className={styles.imgThumb}
                    key={img._id}
                    src={img}
                    alt="van photo"
                  />
                ))}
              </div>
            )}
          </>
          <div className={styles.featureReviewVertBox}>
            <p className={styles.advertFullText}>{modal.description}</p>
            <div className={styles.featuresUnderlineBox}>
              <div className={styles.featureReviewTitles}>
                <p className={styles.featureReviewTitle}>Features</p>
                <p className={styles.featureReviewTitle}>Reviews</p>
              </div>
            </div>
            <div className={styles.featureReviewHorizBox}>
              <div className={styles.featureTagsBox}>
                <button type="button" className={styles.categoryButton}>
                  <svg
                    className={styles.iconThumb20}
                    src={''}
                    alt="adults capacity"
                  />
                  <p className={styles.categoryText}>{modal.adults} adults</p>
                </button>
                <button type="button" className={styles.categoryButton}>
                  <svg
                    className={styles.iconThumb20}
                    src={automatic}
                    alt="transmission"
                  />
                  <p className={styles.categoryText}>{modal.transmission}</p>
                </button>
                <button type="button" className={styles.categoryButton}>
                  <img className={styles.iconThumb20} src={ac} alt="AC" />
                  <p className={styles.categoryText}>
                    {modal.details.airConditioner} AC
                  </p>
                </button>
                <button type="button" className={styles.categoryButton}>
                  <svg
                    className={styles.iconThumb20}
                    src={petrol}
                    alt="engine"
                  />
                  <p className={styles.categoryText}>{modal.engine}</p>
                </button>
                <button type="button" className={styles.categoryButton}>
                  <svg
                    className={styles.iconThumb20}
                    src={kitchen}
                    alt="kitchen"
                  />
                  <p className={styles.categoryText}>
                    {modal.details.kitchen} Kitchen
                  </p>
                </button>
                <button type="button" className={styles.categoryButton}>
                  <svg
                    className={styles.iconThumb20}
                    src={beds}
                    alt="beds qty"
                  />
                  <p className={styles.categoryText}>
                    {modal.details.beds} beds
                  </p>
                </button>
                <button type="button" className={styles.categoryButton}>
                  <svg
                    className={styles.iconThumb20}
                    src={airConditioner}
                    alt="AC2"
                  />
                  <p className={styles.categoryText}>
                    {modal.details.airConditioner} air conditioner
                  </p>
                </button>
                <button type="button" className={styles.categoryButton}>
                  <img className={styles.iconThumb20} src={cd} alt="CD" />
                  <p className={styles.categoryText}>{modal.details.cd} CD</p>
                </button>
                <button type="button" className={styles.categoryButton}>
                  <img className={styles.iconThumb20} src={radio} alt="radio" />
                  <p className={styles.categoryText}>
                    {modal.details.radio} Radio
                  </p>
                </button>
                <button type="button" className={styles.categoryButton}>
                  <img className={styles.iconThumb20} src={hob} alt="hob" />
                  <p className={styles.categoryText}>{modal.details.hob} hob</p>
                </button>
              </div>
              <div className={styles.txtFieldBox}>
                <div className={styles.txtField}>
                  <h2 className={styles.h2}>Vehicle details</h2>
                  <div className={styles.vehicleDetailItem}>
                    <p className={styles.vehicleItemTxt}>Form</p>
                    <p className={styles.vehicleItemTxt}>{modal.form}</p>
                  </div>
                  <div className={styles.VehicleDetailItem}>
                    <p className={styles.vehicleItemTxt}>Length</p>
                    <p className={styles.vehicleItemTxt}>{modal.length}</p>
                  </div>
                  <div className={styles.VehicleDetailItem}>
                    <p className={styles.vehicleItemTxt}>Width</p>
                    <p className={styles.vehicleItemTxt}>{modal.width}</p>
                  </div>
                  <div className={styles.VehicleDetailItem}>
                    <p className={styles.vehicleItemTxt}>Height</p>
                    <p className={styles.vehicleItemTxt}>{modal.height}</p>
                  </div>
                  <div className={styles.VehicleDetailItem}>
                    <p className={styles.vehicleItemTxt}>Tank</p>
                    <p className={styles.vehicleItemTxt}>{modal.tank}</p>
                  </div>
                  <div className={styles.VehicleDetailItem}>
                    <p className={styles.vehicleItemTxt}>Consumption</p>
                    <p className={styles.vehicleItemTxt}>{modal.consumption}</p>
                  </div>
                </div>
              </div>
              <div className={styles.bookingBox}>
                <div className={styles.bookingHeader}>
                  <p className={styles.featureSubtitle}>
                    Book your campervan now
                  </p>
                  <p className={styles.bodyTextBooking}>
                    Stay connected! We are always ready to help you.
                  </p>
                </div>
                <div className={styles.txtField}>
                  <div className={styles.bookingItem}>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="Name"
                      pattern="[A-Za-z]{2,10}"
                      required
                      // onChange={handleChange}
                      style={{
                        '::placeholder': { color: 'rgba(16, 24, 40, 0.60)' },
                      }}
                    />
                  </div>
                  <div className={styles.BookingItem}>
                    <input
                      className={styles.Input}
                      type="email"
                      placeholder="Email"
                      pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                      required
                      // onChange={handleChange}
                      style={{
                        '::placeholder': { color: 'rgba(16, 24, 40, 0.60)' },
                      }}
                    />
                  </div>
                  {/* 
                  <BookingItemRel>
                    <BasicDatePicker></BasicDatePicker>
                    <DatePicker>
                      <img className={styles.iconThumb20} src={calendar} alt="calendar" />
                    </DatePicker>
                  </BookingItemRel> */}
                  <div className={styles.bookingItemRel}>
                    <input
                      className={styles.Input}
                      type="text"
                      placeholder="Booking date"
                      // onChange={handleChange}
                      style={{
                        '::placeholder': { color: 'rgba(16, 24, 40, 0.60)' },
                      }}
                    />
                    <button type="button" className={styles.datePicker}>
                      <svg
                        className={styles.iconThumb20}
                        src={calendar}
                        alt="calendar"
                      />
                    </button>
                  </div>
                  <div className={styles.BookingItem}>
                    <textarea
                      className={styles.textarea}
                      rows="5"
                      placeholder="Comment"
                      // onChange={handleChange}
                      style={{
                        '::placeholder': { color: 'rgba(16, 24, 40, 0.60)' },
                      }}
                    />
                  </div>
                </div>
                <button
                  className={styles.button}
                  type="button"
                  text="Send"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.txtFieldBox}></div>
    </section>
  );
};

export default CardModalData;
