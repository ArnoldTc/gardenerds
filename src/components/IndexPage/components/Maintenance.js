import { Image } from 'react-bootstrap';
import styles from './Maintenance.module.scss';
import left from './components/left.jpg';
import mid from './components/mid.jpg';
import right from './components/right.jpg';
import Title from './Title';

function Maintenance() {
  return (
    <div className={styles.maintenance} id="maintenance">
      <Title title="Karbantartás" />
      <div className={styles.text}>
        <p>
          Széles skálán kínáljuk kertfenntartó, karbantartó szolgáltatásainkat. Egyszeri kert frissítést, őszi kert
          takarítást, téliesitést, tavaszi előkészítést, rendszeres, heti és havi karbantartást, kő-, járólap, díszkő és
          szobor tisztítást, díszfák és bokrok szakszerű metszését, gyep nyírását, szellőztetését, felülvetését.
          Vállaljuk továbbá locsolórendszerek, vakondháló telepítését, akár meglévő gyepszőnyeg alá is, talajtakarást,
          fertőtlenítést, mulcsozást, kövezést, ágyások felásását, trágyázását, valamint gereblyézést és söprést. Ránk
          bízhatja a keletkező zöldhulladékok elszállítását, illetve igény esetén komposzt, vagy komposztáló készítését.
        </p>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <div className={styles.pic}>
            <Image src={left} alt="kép" fluid />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.pic}>
            <Image src={mid} alt="kép" fluid />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.pic}>
            <Image src={right} alt="kép" fluid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
