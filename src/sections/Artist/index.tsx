import Artists from '../../assets/artists.png';
import styles from './styles.module.scss';

export function Artist() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <img src={Artists} alt="artists" />
        <div>
          <h1>De quais artistas você gosta?</h1>
          <h2>Criaremos uma experiência personalizada para você</h2>
          <button className={styles.button} type="button">
            VAMOS LÁ
          </button>
        </div>
      </section>
    </div>
  );
}
