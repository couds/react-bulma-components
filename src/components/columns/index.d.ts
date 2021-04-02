import { BulmaComponent } from '..';
import { Breakpoint, ResponsiveModifiers } from '..';

interface ColumnGroupProps {
  variableGap?: {
    [breakpoint in Breakpoint]: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  };
  breakpoint?: Breakpoint;
  gapless?: boolean;
  multiline?: boolean;
  centered?: boolean;
  vCentered?: boolean;
}

type ColumnSize =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'three-quarters'
  | 'two-thirds'
  | 'half'
  | 'one-third'
  | 'one-quarter'
  | 'one-fifth'
  | 'two-fifths'
  | 'three-fifths'
  | 'four-fifths';

interface ColumnBreakpointConfiguration {
  size?: ColumnSize;
  offset?: ColumnSize;
  narrow?: boolean;
}

interface ColumnProps {
  size?: ColumnSize;
  offset?: ColumnSize;
  narrow?: boolean;
  touch?: ColumnBreakpointConfiguration & ResponsiveModifiers;
  mobile?: ColumnBreakpointConfiguration & ResponsiveModifiers;
  tablet?: ColumnBreakpointConfiguration & ResponsiveModifiers;
  desktop?: ColumnBreakpointConfiguration & ResponsiveModifiers;
  widescreen?: ColumnBreakpointConfiguration & ResponsiveModifiers;
  fullhd?: ColumnBreakpointConfiguration & ResponsiveModifiers;
}

declare const Columns: BulmaComponent<ColumnGroupProps, 'div'> & {
  Column: BulmaComponent<ColumnProps, 'div'>;
};

export default Columns;
