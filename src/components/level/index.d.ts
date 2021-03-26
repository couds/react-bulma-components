import { BulmaComponent } from '..';
import { Breakpoint } from '../../modifiers';

interface LevelProps {
  mobile?: boolean;
  breakpoint?: Breakpoint;
}

interface LevelSideProps {
  align?: 'left' | 'right';
}

declare const Level: BulmaComponent<LevelProps, 'div'> & {
  Side: BulmaComponent<LevelSideProps, 'div'>;
  Item: BulmaComponent<{}, 'div'>;
};
export default Level;