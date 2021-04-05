import { BulmaComponent, BulmaComponentWithoutRenderAs } from '..';
import { Color, Size } from '..';

interface TagProps {
  color?: Color;
  size?: Exclude<Size, 'small'>;
  rounded?: boolean;
  remove?: boolean;
}

interface TagGroupProps {
  /**
  * @deprecated This prop was renamed to hasAddons to match bulma specs
  */
  gapless?: boolean;
  hasAddons?: boolean;
}

declare const Tag: BulmaComponent<TagProps, 'span'> & {
  Group: BulmaComponentWithoutRenderAs<TagGroupProps, 'span'>;
};

export default Tag;
