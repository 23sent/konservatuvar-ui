import React from 'react';
import { GoTrashcan, GoPlus } from 'react-icons/go';
import { FaPlay, FaStop } from 'react-icons/fa';

function Icon({ name, ...props }) {
  if (name === 'Delete') {
    return <GoTrashcan {...props} />;
  } else if (name === 'Add') {
    return <GoPlus {...props} />;
  } else if (name === 'Play') {
    return <FaPlay {...props} />;
  } else if (name === 'Stop') {
    return <FaStop {...props} />;
  }
  return <></>;
}

export default Icon;
