import { BulmaComponent, BulmaComponentWithoutRenderAs } from 'src/components';
import { Color, Size } from 'src/modifiers';

interface TagProps {
  color?: Color;
  size?: Exclude<Size, 'small'>;
  rounded?: boolean;
  remove?: boolean;
}

interface TagGroupProps {
  gapless?: boolean;
}

export const Tag: BulmaComponent<TagProps, 'span'> & {
  Group: BulmaComponentWithoutRenderAs<TagGroupProps, 'span'>;
};
