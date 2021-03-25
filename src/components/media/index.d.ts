import { BulmaComponent } from '..';

interface MediaItemProps {
  position?: 'center' | 'right' | 'left';
}

declare const Media: BulmaComponent<{}, 'article'> & {
  Item: BulmaComponent<MediaItemProps, 'div'>;
  Content: BulmaComponent<{}, 'div'>;
};

export default Media;
