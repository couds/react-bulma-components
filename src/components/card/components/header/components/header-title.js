import React from 'react';
import classnames from 'classnames';

import Element from '../../../../element';

const CardHeaderTitle = ({ className, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames('card-header-title', className)}
    />
  );
};

CardHeaderTitle.propTypes = {};

CardHeaderTitle.defaultProps = {};

export default CardHeaderTitle;
