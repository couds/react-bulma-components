import React from 'react';
import classnames from 'classnames';
import Image from '../../image';
import modifiers from '../../../modifiers';

const CardImage = ({
  className,
  style,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);

  return (
    <div
      style={style}
      className={classnames('card-image', modifiers.classnames(allProps), className)}
    >
      <Image {...props} />
    </div>
  );
};

CardImage.propTypes = {
  ...modifiers.propTypes,
  ...Image.propTypes,
};

CardImage.defaultProps = {
  ...modifiers.defaultProps,
  ...Image.defaultProps,
};

export default CardImage;
