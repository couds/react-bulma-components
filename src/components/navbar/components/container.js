import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Container = ({
  style,
  className,
  renderAs,
  children,
  position,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames({
        [`navbar-${position}`]: position,
      }, className)}
      {...props}
    >
      {children}
    </Element>
  );
};

Container.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.string,
  position: PropTypes.oneOf(['start', 'end']),
};

Container.defaultProps = {
  style: {},
  className: '',
  children: null,
  renderAs: 'div',
  position: 'start',
};

export default Container;
