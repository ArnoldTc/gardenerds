import { Card, Col, Row, Table } from 'react-bootstrap';
import img1 from './components/furn1.jpg';
import img2 from './components/furn2.jpg';
import img3 from './components/furn3.jpg';
import img4 from './components/furn4.jpg';
import img5 from './components/furn5.jpg';

import styles from './Furnitures.module.scss';
import Title from './Title';

function Furnitures() {
  return (
    <div className={styles.furnitures} id="furnitures">
      <Title title="Bútorok" />
      <Row>
        <Col sm={3}><div className={styles.sideText}>
          Kertjének kényelmesebbé tételében is segítünk. Egyedi, térhez és stílushoz igazított fa- és fémvázas kültéri
          berendezési tárgyak készítést vállaljuk új és újra felhasználható alapanyagokból. Megrendelheti meglévő kerti
          bútorainak tisztítását, festését, renoválását - beleértve az ülőfelületek és párnák átkárpitozását, újak
          készítését, természetesen víz- és időjárásálló textiliával. Továbbá kérheti keretes rattan és műrattan bútorai
          felújítását – nem javítását!!! –, igény szerint hálós textilén felhasználásával.</div>
        </Col>
        <Col sm={9}>
          <Table responsive>
            <tbody className={styles.tableBody}>
              <tr>
                <td className={styles.cell}>
                  <Card xl={3}>
                    <div className={styles.cellImg}>
                      <Card.Img src={img1} alt="picuter" />
                    </div>
                    <div className={styles.cellBody}>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text to build on the card.</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </td>
                <td className={styles.cell}>
                  <Card xl={3}>
                    <div className={styles.cellImg}>
                      <Card.Img src={img2} alt="picuter" />
                    </div>
                    <div className={styles.cellBody}>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text to build on the card.</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </td>
                <td className={styles.cell}>
                  <Card xl={3}>
                    <div className={styles.cellImg}>
                      <Card.Img src={img3} alt="picuter" />
                    </div>
                    <div className={styles.cellBody}>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text to build on the card.</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </td>
                <td className={styles.cell}>
                  <Card xl={3}>
                    <div className={styles.cellImg}>
                      <Card.Img src={img4} alt="picuter" />
                    </div>
                    <div className={styles.cellBody}>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text to build on the card.</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </td>
                <td className={styles.cell}>
                  <Card xl={3}>
                    <div className={styles.cellImg}>
                      <Card.Img src={img5} alt="picuter" />
                    </div>
                    <div className={styles.cellBody}>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text to build on the card.</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </td>
                <td className={styles.cell}>
                  <Card xl={3}>
                    <div className={styles.cellImg}>
                      <Card.Img src={img1} alt="picuter" />
                    </div>
                    <div className={styles.cellBody}>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text to build on the card.</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </td>
                <td className={styles.cell}>
                  <Card xl={3}>
                    <div className={styles.cellImg}>
                      <Card.Img src={img2} alt="picuter" />
                    </div>
                    <div className={styles.cellBody}>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text to build on the card.</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </td>
                <td className={styles.cell}>
                  <Card xl={3}>
                    <div className={styles.cellImg}>
                      <Card.Img src={img3} alt="picuter" />
                    </div>
                    <div className={styles.cellBody}>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text to build on the card.</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </td>
                <td className={styles.cell}>
                  <Card xl={3}>
                    <div className={styles.cellImg}>
                      <Card.Img src={img4} alt="picuter" />
                    </div>
                    <div className={styles.cellBody}>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text to build on the card.</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </td>
                <td className={styles.cell}>
                  <Card xl={3}>
                    <div className={styles.cellImg}>
                      <Card.Img src={img5} alt="picuter" />
                    </div>
                    <div className={styles.cellBody}>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>Some quick example text to build on the card.</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Furnitures;
