import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { CardHits } from '../../components/CardHits';
import styles from './styles.module.scss';

export function TodayHits() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.div}>
          <div>
            <h1>Hits de hoje</h1>
          </div>
          <div className={styles.arrows}>
            <button type="button">
              <BiChevronLeft />
            </button>
            <button type="button">
              <BiChevronRight />
            </button>
          </div>
        </div>
        <div className={styles.music}>
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
          <CardHits />
        </div>
      </section>
    </div>
  );
}
