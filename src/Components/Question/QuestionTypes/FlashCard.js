import React, { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Contents from '../Contents';
import './Flashcard.scss';
import { useDispatch } from 'react-redux';
import { updateQuestionAccuracyRequest } from '../../../store/actions';

function Flashcard({ question }) {
  const { front, back } = question.content;

  const [isBack, setIsBack] = useState(false);
  const dispatch = useDispatch();

  function sendAnswer(accuracy) {
    dispatch(updateQuestionAccuracyRequest(question.id, accuracy));
  }
  return (
    <div>
      <div className={`d-flex justify-content-center flip_card_animation ${isBack ? 'on-back' : ''}`}>
        <Card className="content" onClick={() => setIsBack(!isBack)}>
          <Card.Body className="front d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center">
              {front?.length && <Contents contents={front} />}
            </div>
          </Card.Body>
          <Card.Body className="back d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center">
              {back?.length && <Contents contents={back} />}
            </div>
          </Card.Body>
          <Card.Body className="pe-none" style={{ visibility: 'hidden' }}>
            <div className="">{front?.length && <Contents contents={front} />}</div>
            <div className="">{back?.length && <Contents contents={back} />}</div>
          </Card.Body>
        </Card>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-3">
        <Button variant="success" onClick={() => sendAnswer(1)}>
          Doğru
        </Button>
        <Button variant="danger" onClick={() => sendAnswer(0)}>
          Yanlış
        </Button>
      </div>
    </div>
  );
}

export default Flashcard;
