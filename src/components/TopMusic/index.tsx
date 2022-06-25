import { BsFillPlayFill, BsDot } from 'react-icons/bs';
import { BiLike, BiDislike, BiDotsVerticalRounded } from 'react-icons/bi';
import Image from '../../assets/teste_image.png';
import styles from './styles.module.scss';

export function TopMusic() {
  return (
    <div className={styles.container}>
      <img src={Image} alt="the weekend" />
      1&nbsp;&nbsp;&nbsp;
      <div>
        <h1>Music name</h1>
        <h2>
          The Weekend &nbsp; <BsDot />
          &nbsp; After Hours
        </h2>
      </div>
      <div className={styles.hover}>
        <BsFillPlayFill />
        <div>
          <BiLike />
          <BiDislike />
          <BiDotsVerticalRounded />
        </div>
      </div>
    </div>
  );
}
