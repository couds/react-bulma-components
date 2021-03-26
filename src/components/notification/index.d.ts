import { BulmaComponent } from '..';
import { Color } from '../../modifiers';

interface NotificationProps {
  color?: Color;
  light?: Boolean;
}

declare const Notification: BulmaComponent<NotificationProps, 'div'>;

export default Notification;
