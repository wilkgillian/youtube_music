import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { VideoRecomend } from '../../components/VideoRecomend';

import styles from './styles.module.scss';

export function Recomend() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.div}>
          <div>
            <h1>Videoclipes recomendados</h1>
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
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
          <VideoRecomend />
        </div>
      </section>
    </div>
  );
}
