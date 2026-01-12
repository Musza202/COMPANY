import productsJson from './products.json';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

export default function Termekek() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">🛍️ Termékeink</h1>

      <Row>
        {productsJson.products.map((product) => {
          const discountedPrice = product.onSale
            ? Math.round(
                product.price * (1 - product.discountPercent / 100)
              )
            : product.price;

          return (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <Card className="h-100 product-card position-relative">
                {product.onSale && (
                  <Badge bg="danger" className="sale-badge">
                    AKCIÓ -{product.discountPercent}%
                  </Badge>
                )}

                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-muted">
                    {product.description}
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="bg-white text-center">
                  {product.onSale ? (
                    <>
                      <div className="old-price">
                        {product.price.toLocaleString()} Ft
                      </div>
                      <div className="product-price text-danger fw-bold">
                        {discountedPrice.toLocaleString()} Ft
                      </div>
                    </>
                  ) : (
                    <div className="product-price fw-bold">
                      {product.price.toLocaleString()} Ft
                    </div>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
