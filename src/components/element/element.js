import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { normalizeAlign } from '../../services/normalizer';

const buildResponsiveness = (
  currentViewport,
  { display, textAlign, textSize, only, invisible } = {},
) => {
  const suffix = only ? '-only' : '';

  return classnames({
    [`is-${display}-${currentViewport}${suffix}`]: display,
    [`has-text-${normalizeAlign(
      textAlign,
    )}-${currentViewport}${suffix}`]: textAlign,
    [`is-size-${textSize}-${currentViewport}${suffix}`]: textSize,
    [`is-invisible-${currentViewport}${suffix}`]: invisible,
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
  display,
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
  textAlign,
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
        'is-clearfix': clearfix,
        [`is-pulled-${pull}`]: pull,
        'is-marginless': marginless,
        'is-paddingless': paddingless,
        'is-overlay': overlay,
        'is-clipped': clipped,
        'is-radiusless': radiusless,
        'is-shadowless': shadowless,
        'is-unselectable': unselectable,
        [`is-${display}`]: display,
        'is-invisible': invisible,
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
        [`has-text-${normalizeAlign(textAlign)}`]: textAlign,
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

const Element = ({ className, renderAs, domRef, children, ...allProps }) => {
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
  backgroundColor: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'link',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'text',
    ]),
    PropTypes.string,
  ]),
  className: PropTypes.string,
  clearfix: PropTypes.bool,
  clickable: PropTypes.bool,
  clipped: PropTypes.bool,
  colorVariant: PropTypes.oneOf(['light', 'dark']),
  display: PropTypes.oneOf([
    'block',
    'flex',
    'inline',
    'inline-block',
    'inline-flex',
    'relative',
    'hidden',
  ]),
  /**
   * Reference to Dom element
   */
  domRef: PropTypes.object,
  // Flex
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  flexGrow: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  italic: PropTypes.bool,
  invisible: PropTypes.bool,
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
  m: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  mt: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  mr: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  mb: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  ml: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  mx: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  my: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  marginless: PropTypes.bool,
  overlay: PropTypes.bool,
  paddingless: PropTypes.bool,
  p: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  pt: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  pr: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  pb: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  pl: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  px: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  py: PropTypes.oneOfType([
    PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    PropTypes.number,
    PropTypes.string,
  ]),
  pull: PropTypes.oneOf([undefined, 'right', 'left']),
  radiusless: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    /**
     * A string with the name of an Html element or a React Component
     */
    PropTypes.object,
  ]),
  shadowless: PropTypes.bool,
  textAlign: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
  textColor: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'link',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'text',
    ]),
    PropTypes.string,
  ]),
  textFamily: PropTypes.string,
  textSize: PropTypes.oneOfType([
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    PropTypes.string,
    PropTypes.number,
  ]),
  textTransform: PropTypes.oneOf(['capitalized', 'lowercase', 'uppercase']),
  textWeight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold']),
  unselectable: PropTypes.bool,

  mobile: PropTypes.shape({
    textSize: PropTypes.oneOfType([
      PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
      PropTypes.string,
      PropTypes.number,
    ]),
    textAlign: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
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
    textSize: PropTypes.oneOfType([
      PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
      PropTypes.string,
      PropTypes.number,
    ]),
    textAlign: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
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
    textSize: PropTypes.oneOfType([
      PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
      PropTypes.string,
      PropTypes.number,
    ]),
    textAlign: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
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
    textSize: PropTypes.oneOfType([
      PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
      PropTypes.string,
      PropTypes.number,
    ]),
    textAlign: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
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
    textSize: PropTypes.oneOfType([
      PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
      PropTypes.string,
      PropTypes.number,
    ]),
    textAlign: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
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
    textSize: PropTypes.oneOfType([
      PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
      PropTypes.string,
      PropTypes.number,
    ]),
    textAlign: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
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
    textSize: PropTypes.oneOfType([
      PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
      PropTypes.string,
      PropTypes.number,
    ]),
    textAlign: PropTypes.oneOf(['center', 'justify', 'left', 'right']),
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
    textSize: PropTypes.oneOfType([
      PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
      PropTypes.string,
      PropTypes.number,
    ]),
    textAlign: PropTypes.oneOf(['centered', 'justify', 'left', 'right']),
    display: PropTypes.oneOf([
      'block',
      'flex',
      'inline',
      'inline-block',
      'inline-flex',
      'hidden',
    ]),
  }),
};

Element.defaultProps = {
  renderAs: 'div',
};

export default Element;
