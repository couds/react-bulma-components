import { BulmaComponentWithoutRenderAs, BulmaComponent } from '..';
import { Color, Size } from '..';

interface IconProps {
  icon?: string;
  size?: Size | 'auto';
  align?: 'left' | 'right';
  color?: Color;
  text?: Boolean;
}

declare const Icon: BulmaComponentWithoutRenderAs<IconProps, 'span'> & {
  Text: BulmaComponent<{}, 'span'>;
};

export default Icon;