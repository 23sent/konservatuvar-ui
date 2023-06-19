import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import EditContents from '../EditContent/EditContents';
import { useDispatch } from 'react-redux';
import { updateEditingQuestion } from '../../../store/actions';

function EditFlashcard({ question }) {
  const dispatch = useDispatch();

  const { front, back } = question.content;

  return (
    <div>
      <Row>
        <Col className="py-3">
          <Card>
            <Card.Body>
              <div className="display-6 mb-3 ">Ön yüz</div>
              <EditContents
                contents={front}
                onChange={(contents) => {
                  question.content.front = contents;
                  dispatch(updateEditingQuestion(question));
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="py-3">
          <Card>
            <Card.Body>
              <div className="display-6 mb-3">Arka yüz</div>
              <EditContents
                contents={back}
                onChange={(contents) => {
                  question.content.back = contents;
                  dispatch(updateEditingQuestion(question));
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EditFlashcard;
