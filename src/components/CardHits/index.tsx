import { BiPlay, BiDotsVerticalRounded } from 'react-icons/bi';
import Image from '../../assets/teste_image.png';
import styles from './styles.module.scss';

export function CardHits() {
  return (
    <div className={styles.container}>
      <img src={Image} alt="the weekend" />
      <div>
        <a href="#">Title</a>
        <p>Henrique & Juliano, Marília Mendonça, Hugo & Guilhermaasasasase</p>
      </div>
      <div className={styles.hover}>
        <BiDotsVerticalRounded />
        <button type="button">
          <BiPlay />
        </button>
      </div>
    </div>
  );
}
