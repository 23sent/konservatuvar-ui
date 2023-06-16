import React from 'react';
import { Button, Card } from 'react-bootstrap';

function CategoryCard({ id, title, description, subcategories, ...props }) {
  return (
    <Card className="min-h-100">
      <Card.Header>
        <div className="h4">{title}</div>
      </Card.Header>
      <Card.Body>
        <div className="my-2">{description}</div>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-end ">
          <Button href={`/app/category/${id}`}>Egzersizleri Görüntüle</Button>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default CategoryCard;
