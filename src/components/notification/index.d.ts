import { BulmaComponent } from '..';
import { Color } from '../../modifiers';

interface NotificationProps {
  color?: Color;
}

export const Notification: BulmaComponent<NotificationProps, 'div'>;
