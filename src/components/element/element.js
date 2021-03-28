import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import renderAsShape from '../../modifiers/render-as';

const Element = ({ className, renderAs, ratio, domRef, ...allProps }) => {
  const RenderAs = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <RenderAs
      ref={domRef}
      className={
        classnames(className, modifiers.classnames(allProps), {
          'has-ratio': ratio,
          [`is-${ratio}`]: ratio,
        }) || undefined
      }
      {...props}
    />
  );
};

Element.propTypes = {
  ...modifiers.propTypes,
  /**
   * Reference to Dom element
   */
  domRef: PropTypes.object,
  ratio: PropTypes.oneOf([
    'square',
    '1by1',
    '4by3',
    '3by2',
    '16by9',
    '2by1',
    '5by4',
    '5by3',
    '3by1',
    '4by5',
    '3by4',
    '2by3',
    '3by5',
    '9by16',
    '1by2',
    '1by3',
  ]),
  className: PropTypes.string,
  renderAs: renderAsShape,
};

Element.defaultProps = {
  ...Element.defaultProps,
  domRef: undefined,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  ratio: undefined,
};

export default Element;
