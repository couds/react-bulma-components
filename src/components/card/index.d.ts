import { BulmaComponent } from '../../../index';
import { ImageProps } from '../image';

export const Card: BulmaComponent<{}, 'div'> & {
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
