import styles from './Hero.module.scss';
import gardenimage from './components/garden.jpg';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.shadow}></div>
      <img className={styles.image} src={gardenimage} alt="kép" />
      <div className={styles.heroBottom}>
        <div className={styles.description}>
          <div className={styles.text}>
            <h1 className={styles.brand}>Gardenerds</h1>
            <h2>“Kert design és kivitelező cég városi kis kertekre szakosodva.”</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
