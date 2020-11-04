import { BulmaComponent } from 'src/components';
import { Color } from 'src/modifiers';

interface NotificationProps {
  color?: Color;
}

export const Notification: BulmaComponent<NotificationProps, 'div'>;
