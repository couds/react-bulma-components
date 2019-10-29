import React from 'react';
import PropTypes from 'prop-types'
import BIcon from 'react-bulma-components/lib/components/icon';
import './icon.scss';

const Icon = ({ icon, ...props }) => (
  <BIcon {...props}>
    <i className={`icon-${icon}`} />
  </BIcon>
);

BIcon.propTypes = {
  ...BIcon.propTypes,
  size: PropTypes.oneOf(['small', 'medium', 'large', ...Array(24).keys()])
};

Icon.propTypes = {
  ...BIcon.propTypes,
  icon: PropTypes.string,
};

export default Icon;
