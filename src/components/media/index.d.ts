import { BulmaComponent } from '..';

interface MediaItemProps {
  align?: 'center' | 'right' | 'left';
}

declare const Media: BulmaComponent<{}, 'article'> & {
  Item: BulmaComponent<MediaItemProps, 'div'>;
  Content: BulmaComponent<{}, 'div'>;
};

export default Media;
