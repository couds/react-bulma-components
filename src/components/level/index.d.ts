import { BulmaComponent } from '..';

interface LevelProps {
  breakpoint?: | 'mobile';
}

interface LevelSideProps {
  align?: 'left' | 'right';
}

declare const Level: BulmaComponent<LevelProps, 'div'> & {
  Side: BulmaComponent<LevelSideProps, 'div'>;
  Item: BulmaComponent<{}, 'div'>;
};
export default Level;