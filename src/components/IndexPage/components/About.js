import { Card, Col, Row } from 'react-bootstrap';
import { ReactComponent as Logo1 } from './components/Logo1.svg';
import { ReactComponent as Logo2 } from './components/Logo2.svg';
import { ReactComponent as Logo3 } from './components/Logo3.svg';
import { ReactComponent as Logo4 } from './components/Logo4.svg';

import styles from './About.module.scss';
import Title from './Title';

function About() {
  return (
    <div className={styles.about} id="about">
      <Title title="Rólunk" />
      <Row>
        <Col xl={{ span: 2, offset: 2 }} md={6} xs={6}>
          <div className={styles.card}>
            <Card>
              <Logo1 className={styles.pics} />
              <Card.Body>
                <Card.Text>Egyeztessünk egy időpontot!</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col xl={2} md={6} xs={6}>
          <div className={styles.card}>
            <Card>
              <Logo2 className={styles.pics} />
              <Card.Body>
                <Card.Text>Hozzuk létre a tökéletes tervet!</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col xl={2} md={6} xs={6}>
          <div className={styles.card}>
            <Card>
              <Logo3 className={styles.pics} />
              <Card.Body>
                <Card.Text>Az Ön által jóváhagyott tervvel megkezdődik a kivitelezés!</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col xl={2} md={6} xs={6}>
          <div className={styles.card}>
            <Card>
              <Logo4 className={styles.pics} />
              <Card.Body>
                <Card.Text>Koccintson egyet álmai kertjében!</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <div className={styles.sub}>
          <p>
            A GardeNerdS elhivatott, hozzáértő csapata garantálja álmai kertjének megvalósítását a terepmunkától kezdve
            az egyedi bebútorozásig. Ha jelenlegi kertjének átalakítását, újjávarázsolását tervezi, ha még nem volt
            kertje, de van már elképzelése, milyen legyen az első, ha lakóparkjának, lakóhelyének környezete nem felel
            meg az elképzeléseiknek ha már egy tetőkerttel is beérné, ha ideje nincs, de külső környezete folyamatos
            karbantartást igényel, forduljon hozzánk bizalommal. Kiváló szakértelemmel és tapasztalattal rendelkezünk,
            hogy szolgáltatásainkkal minden igényt maradéktalanul kielégítsünk. Kertje Önnek ne teher, hanem
            kikapcsolódás legyen.
          </p>
        </div>
      </Row>
    </div>
  );
}

export default About;
