import React from 'react';
import { Card } from 'react-bootstrap';
import { Icon } from '../Common';
import { useNavigate } from 'react-router-dom';

function CategoryCard({ id, title, description, subcategories, ...props }) {
  const navigate = useNavigate();

  return (
    <Card className="min-h-100 shadow">
      <Card.Body>
        <div className="d-flex justify-content-center">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-light"
            style={{ width: '65px', height: '65px' }}
          >
            <Icon name="Notes" size={40}></Icon>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center my-3 gap-1">
          <div className="h4">{title}</div>
          <div className="overflow-lines text-wrap mw-100">{description}</div>
        </div>
      </Card.Body>
      <Card.Footer
        className="cursor-pointer"
        onClick={() => {
          navigate(`/app/category/${id}`);
        }}
      >
        <div className="d-flex justify-content-center my-1 ">Egzersizleri Görüntüle</div>
      </Card.Footer>
    </Card>
  );
}

export default CategoryCard;
