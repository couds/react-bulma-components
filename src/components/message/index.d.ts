import { BulmaComponent } from 'src/components';
import { Color, Size } from 'src/modifiers';

interface MessageProps {
  size?: Size;
  color?: Color;
}

export const Message: BulmaComponent<MessageProps, 'article'> & {
  Body: BulmaComponent<{}, 'div'>;
  Header: BulmaComponent<{}, 'div'>;
};
