import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import { RiCastLine } from 'react-icons/ri';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdExplore, MdLibraryMusic } from 'react-icons/md';
import Logo from '../../assets/youtubemusic.svg';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <img src={Logo} alt="youtubemusic" />
        <div className={styles.div}>
          <a href="#">Inicío</a>
          <a href="#">Explorar</a>
          <a href="#">Biblioteca</a>
          <button type="button">
            <AiOutlineSearch /> Pesquisar
          </button>
        </div>
        <div className={styles.responsive_nav}>
          <a href="#"><AiFillHome /></a>
          <a href="#"><MdExplore /></a>
          <a href="#"><MdLibraryMusic /></a>
          <a href="#"><AiOutlineSearch /></a>
          <a href="#"><RiCastLine /></a>
        </div>
        <div className={styles.options}>
          <RiCastLine /> <BiDotsVerticalRounded />
          <button type="button">FAZER LOGIN</button>
        </div>
      </nav>
    </header>
  );
}
