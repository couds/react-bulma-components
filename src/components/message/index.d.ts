import { BulmaComponent, Color, Size } from '../../index';

interface MessageProps {
  size?: Size;
  color?: Color;
}

export const Message: BulmaComponent<MessageProps, 'article'> & {
  Body: BulmaComponent<{}, 'div'>;
  Header: BulmaComponent<{}, 'div'>;
};
