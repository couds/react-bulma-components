import { Breakpoint, BulmaComponent } from '../../../index';

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

type ColumnSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColumnBreakpointConfiguration {
  size?: ColumnSize;
  offset?: ColumnSize;
  narrow?: boolean;
}

interface ColumnProps {
  size?: ColumnSize;
  offset?: ColumnSize;
  narrow?: boolean;
  touch?: ColumnBreakpointConfiguration;
  mobile?: ColumnBreakpointConfiguration;
  tablet?: ColumnBreakpointConfiguration;
  desktop?: ColumnBreakpointConfiguration;
  widescreen?: ColumnBreakpointConfiguration;
  fullhd?: ColumnBreakpointConfiguration;
}

export const Columns: BulmaComponent<ColumnGroupProps, 'div'> & {
  Column: BulmaComponent<ColumnProps, 'div'>;
};
