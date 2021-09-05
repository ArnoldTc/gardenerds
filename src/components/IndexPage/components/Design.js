import { Col, Container, Image, Row } from 'react-bootstrap';
import styles from './Design.module.scss';
import image4 from './components/design1.jpg';
import Title from './Title';

function Design() {
  return (
    <div className={styles.design} id="design">
      <Container>
        <Title title="Tervezés" />
      </Container>
      <Container fluid>
        <Row>
          <Col lg={6} md={12} className={styles.colNoPadding}>
            <div className={styles.pic}>
              <Image src={image4} alt="kép" fluid />
            </div>
          </Col>
          <Col>
            <div className={styles.text}>
              <h1 className={styles.preTitle}>before Title</h1>
              <h2 className={styles.title}>The real title</h2>
              <p className={styles.content}>
                Kertjének tervezési folyamata a személyes találkozással, illetve a beépítendő terület megtekintésével
                kezdődik. Meghallgatjuk az elképzeléseit, előadjuk ötleteinket, fix elképzelés eseten átbeszéljük a
                megvalósítható lehetőségeket, és nagy vonalakban vázoljuk, összefoglaljuk a koncepciót. Amennyiben a
                terv megegyezik elképzeléseivel, felmérjük a terepet, elkészítjük a látványtervet, részletezzük az Ön
                egyedi, tökéletes szabadtéri helyiségének megteremtéséhez elengedhetetlen gyakorlati feltételeket,
                úgymint projektbecslés és műszaki követelmények.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Design;
