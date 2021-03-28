import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../../element';
import renderAsShape from '../../../../../modifiers/render-as';

const CardHeaderTitle = ({ className, ...props }) => (
  <Element {...props} className={classnames('card-header-title', className)} />
);

CardHeaderTitle.propTypes = {
  ...Element.propTypes,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

CardHeaderTitle.defaultProps = {
  ...Element.defaultProps,
  className: undefined,
  renderAs: 'div',
};

export default CardHeaderTitle;
