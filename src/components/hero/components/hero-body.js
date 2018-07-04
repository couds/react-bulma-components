import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const HeroBody = ({
  children,
  className,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames(className, modifiers.classnames(allProps), 'hero-body')}
    >
      {children}
    </Element>
  );
};

HeroBody.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

HeroBody.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default HeroBody;
