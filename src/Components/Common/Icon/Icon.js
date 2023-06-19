import React from 'react';
import { GoTrashcan, GoPlus } from 'react-icons/go';
import { FaPlay, FaStop } from 'react-icons/fa';
import { BsChevronRight } from 'react-icons/bs';
import { HiMusicalNote } from 'react-icons/hi2';

function Icon({ name, ...props }) {
  if (name === 'Delete') {
    return <GoTrashcan {...props} />;
  } else if (name === 'Add') {
    return <GoPlus {...props} />;
  } else if (name === 'Play') {
    return <FaPlay {...props} />;
  } else if (name === 'Stop') {
    return <FaStop {...props} />;
  } else if (name === 'ChevronRight') {
    return <BsChevronRight {...props} />;
  } else if (name === 'Notes') {
    return <HiMusicalNote {...props} />;
  }
  return <></>;
}

export default Icon;
