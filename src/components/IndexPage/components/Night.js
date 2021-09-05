import styles from './Lighting.module.scss';

function Night() {
  return (
    <div className={styles.night}>
      <div className={styles.contentText}>
        <p>Éjszaka</p>
        <p>
          Bemutatjuk a környezethez illő, legmutatósabb megoldásokat, amelyből kiválasztja az Önnek legjobban tetsző
          installációt. Igyekszünk ehhez elérhető árú, időtálló, illetve alacsony fogyasztású termékeket biztosítani,
          hogy a kertjének fenntartása gazdaságos legyen.
        </p>
      </div>
    </div>
  );
}

export default Night;
