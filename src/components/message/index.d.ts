import { BulmaComponent } from '..';
import { Color, Size } from '../../modifiers';

interface MessageProps {
  size?: Size;
  color?: Color;
}

export const Message: BulmaComponent<MessageProps, 'article'> & {
  Body: BulmaComponent<{}, 'div'>;
  Header: BulmaComponent<{}, 'div'>;
};
