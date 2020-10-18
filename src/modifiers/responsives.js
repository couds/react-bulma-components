import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Bulma viewports
 * @type {string[]}
 */
const VIEWPORTS = [
  'mobile',
  'tablet',
  'desktop',
  'widescreen',
  'fullhd',
  'touch',
];

/**
 * Display modifier values
 * @type {string[]}
 */
const DISPLAYS = ['block', 'flex', 'inline', 'inline-block', 'inline-flex'];

/**
 * Text size modifier values
 * @type {number[]}
 */
const TEXT_SIZES = [1, 2, 3, 4, 5, 6];

const TEXT_ALIGNMENTS = ['centered', 'justified', 'left', 'right'];

const responsiveModifierPropTypes = VIEWPORTS.reduce(
  (allViewports, currentViewport) => {
    const modifierProps = PropTypes.shape({
      display: PropTypes.oneOf(DISPLAYS),
      hide: PropTypes.bool,
      textSize: PropTypes.oneOf(TEXT_SIZES),
      textAlignment: PropTypes.oneOf(TEXT_ALIGNMENTS),
    });
    const viewportSpecificPropName = `${currentViewport}Only`;

    allViewports.propTypes[currentViewport] = modifierProps;
    allViewports.defaultProps[currentViewport] = undefined;
    allViewports.propTypes[viewportSpecificPropName] = modifierProps;
    allViewports.defaultProps[viewportSpecificPropName] = undefined;

    return allViewports;
  },
  {
    propTypes: {},
    defaultProps: {},
  },
);

/**
 * Return Bulma modifier classes from given component props
 * @param props
 */
const classNamesFromProps = (props) =>
  Object.keys(props).reduce((classNamesObject, propName) => {
    const maybeViewportName = propName.replace('Only', '');

    // each viewport has two props:
    // mobile, mobileOnly; desktop, desktopOnly, etc.
    // this checks if propName is a responsive modifier prop
    if (VIEWPORTS.includes(maybeViewportName)) {
      const currentViewport = maybeViewportName;
      const { display = '', hide = false, textSize = 0, textAlignment = '' } =
        props[propName] || {};

      if (propName.includes('Only')) {
        // current modifiers are viewport specific
        classNamesObject[`is-${display}-${currentViewport}-only`] = display;
        classNamesObject[`is-hidden-${currentViewport}-only`] = hide;
        classNamesObject[
          `has-text-${textAlignment}-${currentViewport}-only`
        ] = textAlignment;
        classNamesObject[`is-size-${textSize}-only`] = textSize;
      } else {
        classNamesObject[`is-${display}-${currentViewport}`] = display;
        classNamesObject[`is-hidden-${currentViewport}`] = hide;
        classNamesObject[
          `has-text-${textAlignment}-${currentViewport}`
        ] = textAlignment;
        classNamesObject[`is-size-${textSize}`] = textSize;
      }
    }

    return classNamesObject;
  }, {});

export default {
  ...responsiveModifierPropTypes,
  classnames: (props) => classNames(classNamesFromProps(props)),
  clean: (props) => {
    VIEWPORTS.forEach((viewport) => {
      delete props[viewport];
      delete props[`${viewport}Only`];
    });
    return props;
  },
};
