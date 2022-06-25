import { BulmaComponent, Size } from '..';

interface ContentProps {
  size?: Size & 'normal';
}

declare const Content: BulmaComponent<ContentProps, 'div'>;

export default Content;
