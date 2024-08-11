import React from 'react';
import MaximizeIcon from '@mui/icons-material/Maximize';

const CustomDot = ({ onClick, active }) => {
  return (
    <li
      className={active ? "custom-dot active" : "custom-dot"}
      onClick={onClick}
      style={{ display: 'inline-block', margin: '0 5px', cursor: 'pointer' }}
    >
      <MaximizeIcon />
    </li>
  );
};

export default CustomDot;