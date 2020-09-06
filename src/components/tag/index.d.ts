import {
  BulmaComponent,
  BulmaComponentWithoutRenderAs,
  Color,
  Size,
} from '../../index';

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
