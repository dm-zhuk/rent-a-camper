import styles from 'components/App/index.module.css';
import AdvertForm from 'components/AdvertForm/AdvertForm';
import AdvertFilter from 'components/AdvertFilter/AdvertFilter';

const FavoritesPage = () => {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.leftSection}>
        <AdvertFilter />
      </section>
      <section className={styles.rightSection}>
        <AdvertForm />
      </section>
    </div>
  );
};

export default FavoritesPage;
