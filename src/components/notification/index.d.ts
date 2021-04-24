import { BulmaComponent } from '..';
import { Color } from '..';

interface NotificationProps {
  color?: Color;
  light?: Boolean;
}

declare const Notification: BulmaComponent<NotificationProps, 'div'>;

export default Notification;
