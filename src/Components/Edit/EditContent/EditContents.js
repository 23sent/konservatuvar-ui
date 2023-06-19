import React from 'react';
import TextContentInput from './TextContentInput';
import { ContentTypes } from '../../../Constants/question';
import { Button, Card, Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Icon, IconButton } from '../../Common';
import ContentDropdown from './ContentDropdown';
import AbcContentInput from './AbcContentInput';
import ImageContentInput from './ImageContentInput';
import SoundContentInput from './SoundContentInput';

function EditContents({ contents, onChange, ...props }) {
  function handleTypeChange(index, type) {
    if (type === ContentTypes.Text) {
      contents[index] = {
        type: ContentTypes.Text,
        text: '',
      };
      onChange(contents);
    } else if (type === ContentTypes.AbcNotation) {
      contents[index] = {
        type: ContentTypes.AbcNotation,
        abc_notation: '',
      };
      onChange(contents);
    } else if (type === ContentTypes.Image) {
      contents[index] = {
        type: ContentTypes.Image,
        url: null,
      };
      onChange(contents);
    } else if (type === ContentTypes.Sound) {
      contents[index] = {
        type: ContentTypes.Sound,
        url: null,
      };
      onChange(contents);
    }
  }

  function getContent(content, index) {
    const { type } = content;
    return (
      <Card key={index}>
        <Card.Header className="d-flex align-items-center justify-content-between">
          <div>
            <ContentDropdown value={type} onChange={(type) => handleTypeChange(index, type)} />
          </div>
          <div className="d-flex gap-2">
            <IconButton
              size="sm"
              onClick={(e) => {
                contents.splice(index, 1);
                onChange(contents);
              }}
            >
              <Icon name="Delete" />
            </IconButton>
          </div>
        </Card.Header>
        <Card.Body>
          <div>
            {type === ContentTypes.Text && (
              <TextContentInput
                key={index}
                content={content}
                onChange={(content) => {
                  contents[index] = content;
                  onChange(contents);
                }}
              />
            )}
            {type === ContentTypes.AbcNotation && (
              <AbcContentInput
                key={index}
                content={content}
                onChange={(content) => {
                  contents[index] = content;
                  onChange(contents);
                }}
              />
            )}
            {type === ContentTypes.Image && (
              <ImageContentInput
                key={index}
                content={content}
                onChange={(content) => {
                  contents[index] = content;
                  onChange(contents);
                }}
              />
            )}
            {type === ContentTypes.Sound && (
              <SoundContentInput
                key={index}
                content={content}
                onChange={(content) => {
                  contents[index] = content;
                  onChange(contents);
                }}
              />
            )}
          </div>
        </Card.Body>
      </Card>
    );
  }

  return (
    <>
      <div className="d-flex flex-column gap-2">
        {contents.map((content, index) => getContent(content, index))}{' '}
        <div key={'add_btn'} className="my-2">
          {/* <Button
          onClick={(e) => {
            contents.push({ type: ContentTypes.Text, text: '' });
            onChange(contents);
          }}
        >
          İçerik Ekle
        </Button> */}
          <Button
            className="d-flex align-items-center gap-2 mx-auto"
            onClick={() => {
              contents.push({ type: ContentTypes.Text, text: '' });
              onChange(contents);
            }}
          >
            <Icon name="Add" />
            <span>İçerik Ekle</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default EditContents;
