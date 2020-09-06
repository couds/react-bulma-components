import { Breakpoint, BulmaComponent } from '../../index';

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
