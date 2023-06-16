import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Contents from '../Contents';
import { updateQuestionAccuracyRequest } from '../../../store/actions';
import { useDispatch } from 'react-redux';

function MultiSelection({ question, ...props }) {
  const { contents, options } = question.content;
  const [answer, _setAnswer] = useState({ answered: false, accuracy: 0 });
  const dispatch = useDispatch();

  function giveAnswer({ answered, accuracy }) {
    if (!answer.answered) {
      _setAnswer({ answered, accuracy });
      dispatch(updateQuestionAccuracyRequest(question.id, accuracy));
    }
  }
  return (
    <div>
      <Row>
        <Col className="py-3">{contents?.length && <Contents contents={contents} />} </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex flex-row flex-wrap align-items-center justify-content-center gap-3">
            {Boolean(options?.length) &&
              options.map((option, index) => (
                <div key={index}>
                  <Button
                    variant={answer.answered ? (option.isTrue ? 'success' : 'warning') : 'primary'}
                    onClick={() => {
                      if (option.isTrue) giveAnswer({ answered: true, accuracy: 1 });
                      else giveAnswer({ answered: true, accuracy: 0 });
                    }}
                  >
                    <Contents contents={option.contents} />
                  </Button>
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MultiSelection;
