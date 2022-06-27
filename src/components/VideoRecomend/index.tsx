import { BiPlay, BiDotsVerticalRounded } from 'react-icons/bi';
import Image from '../../assets/teste_image.png';
import styles from './styles.module.scss';

export function VideoRecomend() {
  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{
          backgroundImage: `url(${Image})`
        }}
      >
        <div className={styles.hover}>
          <div>
            <div>
              <BiDotsVerticalRounded />
            </div>
            <div>
              <BiPlay />
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="#">Title</a>
        <p>Henrique & Juliano, Marília Mendonça, Hugo & Guilhermaasasasase</p>
      </div>
    </div>
  );
}
