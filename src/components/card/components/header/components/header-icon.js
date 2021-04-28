import React from 'react';
import classnames from 'classnames';

import Element from '../../../../element';

const CardHeaderIcon = ({ className, ...props }) => {
  return (
    <Element {...props} className={classnames('card-header-icon', className)} />
  );
};

CardHeaderIcon.propTypes = {};

CardHeaderIcon.defaultProps = {};

export default CardHeaderIcon;
