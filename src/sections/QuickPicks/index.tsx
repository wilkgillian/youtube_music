import { useRef } from 'react';
import { RadioMusic } from '../../components/RadioMusic';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import styles from './styles.module.scss';

export function QuickPicks() {
  const carrousel = useRef(null);
  const handleLeftClick = () => {
    // console.log(carrousel.current);
  };
  const handleRightClick = () => {
    // console.log(carrousel.current);
  };
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.div}>
          <div>
            <h2>INICIAR RÁDIO COM UMA MÚSICA</h2>
            <h1>Escolhas rápidas</h1>
          </div>
          <div className={styles.arrows}>
            <button type="button" onClick={handleLeftClick}>
              <BiChevronLeft />
            </button>
            <button type="button" onClick={handleRightClick}>
              <BiChevronRight />
            </button>
          </div>
        </div>
        <div className={styles.music} ref="carrousel">
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
          <RadioMusic />
        </div>
      </section>
    </div>
  );
}
