import { BulmaComponent, BulmaComponentWithoutRenderAs } from '..';
import { Color, Size } from '../../modifiers';

interface TagProps {
  color?: Color;
  size?: Exclude<Size, 'small'>;
  rounded?: boolean;
  remove?: boolean;
}

interface TagGroupProps {
  gapless?: boolean;
}

declare const Tag: BulmaComponent<TagProps, 'span'> & {
  Group: BulmaComponentWithoutRenderAs<TagGroupProps, 'span'>;
};

export default Tag;
