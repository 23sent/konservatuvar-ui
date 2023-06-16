import React from 'react';
import { Button, Card } from 'react-bootstrap';

function ExerciseCard({ exercise, onEdit, ...props }) {
  const { title, description, id } = exercise;
  return (
    <>
      <Card className="min-h-100">
        <Card.Header>
          <div className="h4">{title}</div>
        </Card.Header>
        <Card.Body>
          <div className="my-2">{description}</div>
        </Card.Body>
        <Card.Footer>
          <div className="mb-1 d-flex justify-content-end">
            {!onEdit && <Button href={`/app/exercise/${id}`}>Egzersiz Seç</Button>}
            {onEdit && <Button href={`/app/my/exercises/edit/${id}`}>Düzenle</Button>}{' '}
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}

export default ExerciseCard;
