import { BulmaComponent, Color } from '../../index';

interface TileProps {
  kind?: 'ancestor' | 'parent' | 'child';
  vertical?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  color?: Color;
  notification?: boolean;
}

export const Tile: BulmaComponent<TileProps, 'div'>;
