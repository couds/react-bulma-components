import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const normalizeAlign = (align) => {
  if (align === 'center') {
    return 'centered';
  }
  if (align === 'justify') {
    return 'justifyed';
  }
  return align;
};

const buildResponsiveness = (
  currentViewport,
  { display, textAlignment, textSize, only } = {},
) => {
  const suffix = only ? '-only' : '';

  return classnames({
    [`is-${display}-${currentViewport}${suffix}`]: display,
    [`has-text-${textAlignment}-${currentViewport}${suffix}`]: textAlignment,
    [`is-size-${textSize}-${currentViewport}${suffix}`]: textSize,
  });
};

export const useElementClassNames = ({
  textColor,
  backgroundColor,
  colorVariant,
  flexDirection,
  flexWrap,
  justifyContent,
  alignContent,
  alignItems,
  flexGrow,
  ratio,
  hidden,
  clearfix,
  paddingless,
  pull,
  marginless,
  overlay,
  clipped,
  radiusless,
  shadowless,
  unselectable,
  invisible,
  clickable,
  srOnly,
  relative,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  textWeight,
  textTransform,
  italic,
  textSize,
  textAlignment,
  textFamily,
  // responsive
  mobile,
  tablet,
  desktop,
  widescreen,
  fullhd,
  touch,
  untilWidescreen,
  untilFullhd,
  ...props
}) => {
  const normalizedTextAlignment = normalizeAlign(textAlignment);

  return [
    classnames(
      {
        [`has-text-${textColor}`]: textColor,
        [`has-background-${backgroundColor}`]: backgroundColor,
        [`is-${colorVariant}`]: colorVariant,
        [`is-flex-direction-${flexDirection}`]: flexDirection,
        [`is-flex-wrap-${flexWrap}`]: flexWrap,
        [`is-justify-content-${justifyContent}`]: justifyContent,
        [`is-align-content-${alignContent}`]: alignContent,
        [`is-align-items-${alignItems}`]: alignItems,
        [`is-flex-grow-${flexGrow}`]: flexGrow,
        'has-ratio': ratio,
        [`is-${ratio}`]: ratio,
        'is-clearfix': clearfix,
        [`is-pulled-${pull}`]: pull,
        'is-marginless': marginless,
        'is-paddingless': paddingless,
        'is-overlay': overlay,
        'is-clipped': clipped,
        'is-radiusless': radiusless,
        'is-shadowless': shadowless,
        'is-unselectable': unselectable,
        'is-relative': relative,
        'is-invisible': invisible,
        'is-hidden': hidden,
        'is-sr-only': srOnly,
        'is-clickable': clickable,
        [`m-${m}`]: m,
        [`mt-${mt}`]: mt,
        [`mr-${mr}`]: mr,
        [`mb-${mb}`]: mb,
        [`ml-${ml}`]: ml,
        [`mx-${mx}`]: mx,
        [`my-${my}`]: my,
        [`p-${p}`]: p,
        [`pt-${pt}`]: pt,
        [`pr-${pr}`]: pr,
        [`pb-${pb}`]: pb,
        [`pl-${pl}`]: pl,
        [`px-${px}`]: px,
        [`py-${py}`]: py,
        [`has-text-${normalizedTextAlignment}`]: normalizedTextAlignment,
        [`has-text-weight-${textWeight}`]: textWeight,
        [`is-size-${textSize}`]: textSize,
        [`is-${textTransform}`]: textTransform,
        [`is-family-${textFamily}`]: textFamily,
        'is-italic': italic,
      },
      buildResponsiveness('mobile', mobile),
      buildResponsiveness('tablet', tablet),
      buildResponsiveness('desktop', desktop),
      buildResponsiveness('widescreen', widescreen),
      buildResponsiveness('fullhd', fullhd),
      buildResponsiveness('touch', touch),
      buildResponsiveness('until-widescreen', untilWidescreen),
      buildResponsiveness('until-fullhd', untilFullhd),
    ),
    props,
  ];
};

const Element = ({
  className,
  renderAs,
  ratio,
  domRef,
  // eslint-disable-next-line react/prop-types
  children,
  ...allProps
}) => {
  const RenderAs = renderAs;
  const [classNames, props] = useElementClassNames(allProps);
  return (
    <RenderAs
      ref={domRef}
      className={classnames(className, classNames) || undefined}
      {...props}
    >
      {children}
    </RenderAs>
  );
};

Element.propTypes = {
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  colorVariant: PropTypes.oneOf(['light', 'dark']),
  // Flex
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-around',
    'space-between',
    'space-evenly',
    'start',
    'end',
    'left',
    'right',
  ]),
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-around',
    'space-between',
    'space-evenly',
    'stretch',
    'start',
    'end',
    'baseline',
  ]),
  alignItems: PropTypes.oneOf([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  flexGrow: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  // Typography
  textSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
  textAlignment: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
  textTransform: PropTypes.oneOf(['capitalized', 'lowercase', 'uppercase']),
  textWeight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold']),
  textFamily: PropTypes.string,
  italic: PropTypes.bool,
  // Helpers
  clearfix: PropTypes.bool,
  pull: PropTypes.oneOf([undefined, 'right', 'left']),
  overlay: PropTypes.bool,
  clipped: PropTypes.bool,
  radiusless: PropTypes.bool,
  shadowless: PropTypes.bool,
  unselectable: PropTypes.bool,
  clickable: PropTypes.bool,
  relative: PropTypes.bool,
  marginless: PropTypes.bool,
  paddingless: PropTypes.bool,
  invisible: PropTypes.bool,
  hidden: PropTypes.bool,
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
  m: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  mt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  mr: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  mb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  ml: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  mx: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  my: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  p: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  pt: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  pr: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  pb: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  pl: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  px: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  py: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  mobile: PropTypes.shape({
    textSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    textAlignment: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
    display: PropTypes.oneOf([
      'block',
      'flex',
      'inline',
      'inline-block',
      'inline-flex',
      'hidden',
    ]),
  }),
  tablet: PropTypes.shape({
    textSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    textAlignment: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
    display: PropTypes.oneOf([
      'block',
      'flex',
      'inline',
      'inline-block',
      'inline-flex',
      'hidden',
    ]),
    only: PropTypes.bool,
  }),
  desktop: PropTypes.shape({
    textSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    textAlignment: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
    display: PropTypes.oneOf([
      'block',
      'flex',
      'inline',
      'inline-block',
      'inline-flex',
      'hidden',
    ]),
    only: PropTypes.bool,
  }),
  widescreen: PropTypes.shape({
    textSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    textAlignment: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
    display: PropTypes.oneOf([
      'block',
      'flex',
      'inline',
      'inline-block',
      'inline-flex',
      'hidden',
    ]),
    only: PropTypes.bool,
  }),
  fullhd: PropTypes.shape({
    textSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    textAlignment: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
    display: PropTypes.oneOf([
      'block',
      'flex',
      'inline',
      'inline-block',
      'inline-flex',
      'hidden',
    ]),
  }),
  touch: PropTypes.shape({
    textSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    textAlignment: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
    display: PropTypes.oneOf([
      'block',
      'flex',
      'inline',
      'inline-block',
      'inline-flex',
      'hidden',
    ]),
  }),
  untilWidrscreen: PropTypes.shape({
    textSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    textAlignment: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
    display: PropTypes.oneOf([
      'block',
      'flex',
      'inline',
      'inline-block',
      'inline-flex',
      'hidden',
    ]),
  }),
  untilFullhd: PropTypes.shape({
    textSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    textAlignment: PropTypes.oneOf(['centered', 'justify', 'left', 'right']),
    display: PropTypes.oneOf([
      'block',
      'flex',
      'inline',
      'inline-block',
      'inline-flex',
      'hidden',
    ]),
  }),
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    /**
     * A string with the name of an Html element or a React Component
     */
    PropTypes.object,
  ]),
};

Element.defaultProps = {
  renderAs: 'div',
};

export default Element;
