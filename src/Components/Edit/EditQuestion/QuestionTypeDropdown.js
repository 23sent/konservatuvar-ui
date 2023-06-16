import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { QuestionTypes } from '../../../Constants/question';

function QuestionTypeDropdown({ placeholder, value, onChange, ...props }) {
  function handleSelect(type) {
    onChange?.(type);
  }

  function getOptions() {
    const options = [];
    for (const typeName in QuestionTypes) {
      options.push(<Dropdown.Item onClick={() => handleSelect(QuestionTypes[typeName])}>{typeName}</Dropdown.Item>);
    }
    return options;
  }

  function getTypeName(type) {
    for (const typeName in QuestionTypes) {
      if (QuestionTypes[typeName] === type) return typeName;
    }
    return placeholder || 'Seçim Yapılmadı';
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as="div" className="d-flex align-items-center">
        {getTypeName(value)}
      </Dropdown.Toggle>
      <Dropdown.Menu>{getOptions()}</Dropdown.Menu>
    </Dropdown>
  );
}

export default QuestionTypeDropdown;
