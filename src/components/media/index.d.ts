import { BulmaComponent } from 'src/components';

interface MediaItemProps {
  position?: 'center' | 'right' | 'left';
}

export const Media: BulmaComponent<{}, 'article'> & {
  Item: BulmaComponent<MediaItemProps, 'div'>;
  Content: BulmaComponent<{}, 'div'>;
};
