import PropTypes from 'prop-types';

const renderAsShape = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.func,
  PropTypes.object,
]);

export default renderAsShape;
