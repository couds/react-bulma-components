import { BulmaComponent } from '..';
import { Color } from '../../modifiers';

interface NotificationProps {
  color?: Color;
}

declare const Notification: BulmaComponent<NotificationProps, 'div'>;

export default Notification;
