import { TopMusic } from '../../components/TopMusic';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import styles from './styles.module.scss';

export function Top() {
  return (
    <div className={styles.container} id="top">
      <section className={styles.section}>
        <div className={styles.div}>
          <div>
            <h1>Em alta</h1>
          </div>
          <div className={styles.arrows}>
            <h2>MAIS</h2>
            <button type="button">
              <BiChevronLeft />
            </button>
            <button type="button">
              <BiChevronRight />
            </button>
          </div>
        </div>
        <div className={styles.music}>
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
          <TopMusic />
        </div>
      </section>
    </div>
  );
}
