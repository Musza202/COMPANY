import aboutJson from './about.json';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

export default function Rolunk() {
  return (
    <Container className="my-5">
      {/* Fejléc */}
      <Row className="mb-4">
        <Col className="text-center">
          <img
            src={aboutJson.logo}
            alt={`${aboutJson.companyName} logó`}
            className="img-fluid mb-3"
            style={{ maxWidth: '180px' }}
          />
          <h1>{aboutJson.companyName}</h1>
          <p className="text-muted">Alapítva: {aboutJson.founded}</p>
        </Col>
      </Row>

      {/* Hero kép */}
      <Row className="mb-5">
        <Col>
          <img
            src={aboutJson.heroImage}
            alt="Cég bemutató kép"
            className="img-fluid rounded w-100"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>
      </Row>

      {/* Leírás + Küldetés */}
      <Row className="mb-4">
        <Col md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Rólunk</Card.Title>
              <Card.Text>{aboutJson.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Küldetésünk</Card.Title>
              <Card.Text>{aboutJson.mission}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Értékek + Kapcsolat */}
      <Row>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Értékeink</Card.Title>
              <ListGroup variant="flush">
                {aboutJson.values.map((value, index) => (
                  <ListGroup.Item key={index}>{value}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Kapcsolat</Card.Title>
              <p>Email: {aboutJson.contact.email}</p>
              <p>Telefon: {aboutJson.contact.phone}</p>
              <p>Cím: {aboutJson.contact.address}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
