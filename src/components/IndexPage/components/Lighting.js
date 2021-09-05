import { Nav, Row, Tab } from 'react-bootstrap';

import Night from './Night';
import Day from './Day';

import styles from './Lighting.module.scss';
import Title from './Title';

function Lighting() {
  return (
    <div className={styles.lighting} id="lighting">
      <Title title="Világítás" />
      <Tab.Container id="left-tabs-example" defaultActiveKey="day">
        <Row className="justify-content-md-center">
          <div className={styles.navlinks}>
            <Nav fill variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="day">
                  <h1 className={styles.title}>Nappal</h1>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="night">
                  <h1 className={styles.title}>Éjszaka</h1>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Row>
        <Row>
          <div className={styles.content}>
            <Tab.Content>
              <Tab.Pane eventKey="day">
                <Day />
              </Tab.Pane>
              <Tab.Pane eventKey="night">
                <Night />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Lighting;
