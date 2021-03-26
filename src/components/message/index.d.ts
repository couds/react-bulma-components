import { BulmaComponent } from '..';
import { Color, Size } from '../../modifiers';

interface MessageProps {
  size?: Size;
  color?: Color;
}

declare const Message: BulmaComponent<MessageProps, 'article'> & {
  Body: BulmaComponent<{}, 'div'>;
  Header: BulmaComponent<{}, 'div'>;
};

export default Message;
