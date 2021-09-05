import styles from './Lighting.module.scss';

function Day() {
  return (
    <div className={styles.day}>
      <div className={styles.contentText}>
        <p>Nappal</p>
        <p>
          Városi kiskertéjének világítására is nagy figyelmet fordítunk, hogy alkonyatkor, vagy egész éjszaka is
          hangulatos környezetben tölthesse idejét. A világítást kérésre beletervezzük az élménykertbe, vagy
          beleképzeljük már meglévő kertjébe.
        </p>
      </div>
    </div>
  );
}

export default Day;
