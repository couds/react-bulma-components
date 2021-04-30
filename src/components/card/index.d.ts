import { BulmaComponent } from '..';
import ImageProps from '../image';

declare const Card: BulmaComponent<{}, 'div'> & {
  Image: BulmaComponent<ImageProps, 'figure'>;
  Content: BulmaComponent<{}, 'div'>;
  Header: BulmaComponent<{}, 'div'> & {
    Title: BulmaComponent<{}, 'div'>;
    Icon: BulmaComponent<{}, 'div'>;
  };
  Footer: BulmaComponent<{}, 'div'> & {
    Item: BulmaComponent<{}, 'div'>;
  };
};

export default Card
