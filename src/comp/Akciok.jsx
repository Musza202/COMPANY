import salesJson from './sales.json';
import productsJson from './products.json';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

export default function Akciok() {
  // termék ID → termék név map
  const productMap = {};
  productsJson.products.forEach((p) => {
    productMap[p.id] = p.name;
  });

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">🔥 Akcióink</h1>

      <Row>
        {salesJson.sales.map((sale) => (
          <Col key={sale.id} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-start">
                  {sale.title}
                  <Badge bg="warning" text="dark">
                    Akció
                  </Badge>
                </Card.Title>

                <Card.Text className="text-muted">
                  {sale.description}
                </Card.Text>

                <p>
                  <strong>Érvényes:</strong>{' '}
                  {new Date(sale.validUntil).toLocaleDateString('hu-HU')}
                </p>

                <h6>Érintett termékek:</h6>
                <ListGroup variant="flush">
                  {sale.productIds.map((id) => (
                    <ListGroup.Item key={id}>
                      {productMap[id]}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
