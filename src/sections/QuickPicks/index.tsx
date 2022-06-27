import { RadioMusic } from '../../components/RadioMusic';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
export function QuickPicks() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.div}>
          <div>
            <h2>INICIAR RÁDIO COM UMA MÚSICA</h2>
            <h1>Escolhas rápidas</h1>
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
        <Swiper>
          <SwiperSlide>
            <div className={styles.music}>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.music}>
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
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}
