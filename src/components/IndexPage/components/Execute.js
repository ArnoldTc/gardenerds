import styles from './Execute.module.scss';
import Title from './Title';

function Execute() {
  return (
    <div className={styles.execute} id="execute">
      <div className={styles.bg}>
        <Title title="Kivitelezés" />
        <div className={styles.text}>
          <p>
            Szakembereink az előre egyeztetett időpontban megkezdik a kertépítést. A folyamat során a projekt vezetője a
            napi tevékenységről munkanaplót vezet, ami tartalmazza, hogy mit és miért csinálunk, az első lépesektől
            kezdve egészen az utolsó simításokig. Figyelmezteti Önt a menet közben felmerülő nehézségekre, még mielőtt
            azok gondot okozhatnának. A munkálatok egyes fázisai erős zajjal járnak, kérjük, ezt tartsa szem előtt.
            Amennyiben kérdése vagy problémája van, a telefonon, chat-es alkalmazásokon, illetve, igény esetén,
            személyesen is állunk rendelkezésére a kertépítés időtartama alatt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Execute;
