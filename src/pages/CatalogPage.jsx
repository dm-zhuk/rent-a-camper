import { Toaster } from 'react-hot-toast';
import styles from 'components/App/index.module.css';
import AdvertForm from 'components/AdvertForm/AdvertForm';
import AdvertFilter from 'components/AdvertFilter/AdvertFilter';
import Card from '../helpers/Card';

const CatalogPage = () => {
  return (
    <>
      <Toaster />
      <div className={styles.mainContainer}>
        <section className={styles.leftSection}>
          <AdvertFilter />
        </section>
        <section className={styles.rightSection}>
          <Card />
          <AdvertForm />
        </section>
      </div>
    </>
  );
};
export default CatalogPage;
