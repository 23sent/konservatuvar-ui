import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { ContentTypes } from '../../../Constants/question';

function ContentDropdown({ value, onChange, ...props }) {
  function handleSelect(type) {
    onChange?.(type);
  }

  function getOptions() {
    const options = [];
    for (const typeName in ContentTypes) {
      options.push(<Dropdown.Item onClick={() => handleSelect(ContentTypes[typeName])}>{typeName}</Dropdown.Item>);
    }
    return options;
  }

  function getTypeName(type) {
    for (const typeName in ContentTypes) {
      if (ContentTypes[typeName] === type) return typeName;
    }
    return 'Seçim Yapılmadı';
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

export default ContentDropdown;
