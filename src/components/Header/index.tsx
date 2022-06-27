import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import { RiCastLine } from 'react-icons/ri';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { MdExplore, MdLibraryMusic } from 'react-icons/md';
import { Link } from 'react-scroll';
import Logo from '../../assets/youtubemusic.svg';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <img src={Logo} alt="youtubemusic" />
        <div className={styles.div}>
          <Link to="inicio" activeClass="active" offset={0} duration={500}>
            Inicío
          </Link>
          <Link to="today_hits" activeClass="active" offset={0} duration={500}>
            Explorar
          </Link>
          <Link to="top" activeClass="active" offset={0} duration={500}>
            Biblioteca
          </Link>
          <button type="button">
            <AiOutlineSearch /> Pesquisar
          </button>
        </div>
        <div className={styles.responsive_nav}>
          <a href="#">
            <AiFillHome />
          </a>
          <a href="#">
            <MdExplore />
          </a>
          <a href="#">
            <MdLibraryMusic />
          </a>
          <a href="#">
            <AiOutlineSearch />
          </a>
          <a href="#">
            <RiCastLine />
          </a>
        </div>
        <div className={styles.options}>
          <RiCastLine /> <BiDotsVerticalRounded />
          <button type="button">FAZER LOGIN</button>
        </div>
      </nav>
    </header>
  );
}
