import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { QuestionTypeNames, QuestionTypes } from '../../../Constants/question';

function QuestionTypeDropdown({ placeholder, value, onChange, ...props }) {
  function handleSelect(type) {
    onChange?.(type);
  }

  function getOptions() {
    const options = [];
    for (const typeName in QuestionTypes) {
      options.push(
        <Dropdown.Item onClick={() => handleSelect(QuestionTypes[typeName])}>
          {QuestionTypeNames[QuestionTypes[typeName]]}
        </Dropdown.Item>,
      );
    }
    return options;
  }

  function getTypeName(type) {
    if (QuestionTypeNames[type]) return QuestionTypeNames[type];

    return placeholder || 'Seçim Yapılmadı';
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as={Button} className="d-flex align-items-center remove_toggle_after">
        {getTypeName(value)}
      </Dropdown.Toggle>
      <Dropdown.Menu>{getOptions()}</Dropdown.Menu>
    </Dropdown>
  );
}

export default QuestionTypeDropdown;
