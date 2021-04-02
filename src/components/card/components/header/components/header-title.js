import React from 'react';
import classnames from 'classnames';

import Element from '../../../../element';

const CardHeaderTitle = ({ className, ...props }) => (
  <Element {...props} className={classnames('card-header-title', className)} />
);

CardHeaderTitle.propTypes = {
  ...Element.propTypes,
};

CardHeaderTitle.defaultProps = {
  ...Element.defaultProps,
};

export default CardHeaderTitle;
