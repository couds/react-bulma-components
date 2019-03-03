import React from 'react';
import BIcon from 'react-bulma-components/lib/components/icon';
import './icon.scss';

const Icon = ({ icon, ...props }) => (
  <BIcon {...props}>
    <i className={`icon-${icon}`} />
  </BIcon>
);

export default Icon;
