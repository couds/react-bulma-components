import { BulmaComponent } from 'src/components';
import { Breakpoint } from 'src/modifiers';

interface LevelProps {
  mobile?: boolean;
  breakpoint?: Breakpoint;
}

interface LevelSideProps {
  align?: 'left' | 'right';
}

export const Level: BulmaComponent<LevelProps, 'div'> & {
  Side: BulmaComponent<LevelSideProps, 'div'>;
  Item: BulmaComponent<{}, 'div'>;
};
