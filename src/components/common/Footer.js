import { Col, Container, Row } from 'react-bootstrap';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col md={6}>
            <h1 className={styles.title}>ABOUT COMPANY</h1>
            <p className={styles.content}>FAX: (123) 123-4567</p>
          </Col>
          <Col md={6}>
            <h1 className={styles.title}>CONSTRUCTION OFFICE</h1>
            <p className={styles.content}>chicago@construction.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
