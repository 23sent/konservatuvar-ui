import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import EditContents from '../EditContent/EditContents';
import { useDispatch } from 'react-redux';
import { updateEditingQuestion } from '../../../store/actions';
import { Icon, IconButton } from '../../Common';

function EditMultiSelection({ question, ...props }) {
  const { contents, options } = question.content;
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>Soru:</Row>
      <Row>
        <Col className="py-3">
          <EditContents
            contents={contents}
            onChange={(contents) => {
              question.content.contents = contents;
              dispatch(updateEditingQuestion(question));
            }}
          />
        </Col>
      </Row>
      <Row className="mb-2">Seçenekler:</Row>

      <Row>
        <Col className="d-flex flex-column gap-3">
          {options.map((option, index) => (
            <Row key={index}>
              <Col>
                <Card>
                  <Card.Header className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <span>{`${index + 1}. Seçenek`}</span>{' '}
                      <Form.Check
                        checked={option.isTrue}
                        tooltip={'Doğru Cevap'}
                        onChange={(e) => {
                          question.content.options[index].isTrue = e.target.checked;
                          dispatch(updateEditingQuestion(question));
                        }}
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-end gap-3">
                      <IconButton
                        size="sm"
                        onClick={() => {
                          question.content.options.splice(index, 1);
                          dispatch(updateEditingQuestion(question));
                        }}
                      >
                        <Icon name="Delete" />
                      </IconButton>
                    </div>
                  </Card.Header>
                  <Card.Body className="p-2 border position-relative">
                    <EditContents
                      contents={option.contents}
                      onChange={(contents) => {
                        question.content.options.contents = contents;
                        dispatch(updateEditingQuestion(question));
                      }}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}

          <Row key={'add_button'}>
            <Col>
              <Button
                className="d-flex align-items-center gap-2 mx-auto"
                onClick={() => {
                  question.content.options.push({ isTrue: false, contents: [] });
                  dispatch(updateEditingQuestion(question));
                }}
              >
                <Icon name="Add" />
                <span>Seçenek Ekle</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default EditMultiSelection;
