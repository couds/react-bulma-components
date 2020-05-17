declare module 'react-bulma-components' {
  import * as React from 'react';

  type Color =
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark'
    | 'white'
    | 'black'
    | 'link';

  type Size = 'small' | 'medium' | 'large';

  type Breakpoint =
    | 'desktop'
    | 'tablet'
    | 'mobile'
    | 'widescreen'
    | 'fullhd'
    | 'touch';

  interface HelperProps {
    clearfix?: boolean;
    pull?: 'left' | 'right';
    marginless?: boolean;
    paddingless?: boolean;
    overlay?: boolean;
    clipped?: boolean;
    radiusless?: boolean;
    shadowless?: boolean;
    unselectable?: boolean;
    invisible?: boolean;
    hidden?: boolean;
  }

  interface SizeShape {
    display?: {
      value?: 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex';
      only?: boolean;
    };
    hide?: {
      value?: boolean;
      only?: boolean;
    };
    textSize?: {
      value: 1 | 2 | 3 | 4 | 5 | 6;
    };
    textAlignment?: {
      value?: 'centered' | 'justified' | 'left' | 'right';
      only?: boolean;
    };
  }

  interface ResponsiveProps {
    responsive?: {
      mobile?: SizeShape;
      tablet?: SizeShape;
      desktop?: SizeShape;
      widescreen?: SizeShape;
      fullhd?: SizeShape;
      touch?: SizeShape;
    };
  }

  interface ColorProps {
    textColor?: string;
    backgroundColor?: string;
    colorVariant?: 'light' | 'dark';
  }

  interface TypographyProps {
    textSize?: 1 | 2 | 3 | 4 | 5 | 6;
    textAlignment?: 'centered' | 'justified' | 'left' | 'right';
    textTransform?: 'capitalized' | 'lowercase' | 'uppercase';
    textWeight?: 'light' | 'normal' | 'semibold' | 'bold';
    italic?: boolean;
  }

  type HTMLAttributes<K extends keyof JSX.IntrinsicElements> = Pick<
    JSX.IntrinsicElements[K],
    Exclude<keyof JSX.IntrinsicElements[K], 'unselectable'>
  >;

  type ModifierProps = HelperProps &
    ColorProps &
    ResponsiveProps &
    TypographyProps;

  type ElementProps = ModifierProps & {
    className?: string;
    domRef?: React.RefObject<HTMLElement>;
  } & (
      | ({ renderAs?: 'div' } & HTMLAttributes<'div'>)
      | ({ renderAs: 'a' } & HTMLAttributes<'a'>)
      | ({ renderAs: 'abbr' } & HTMLAttributes<'abbr'>));

  // Below defines all exported components

  // Box component

  type BoxProps = {} & ElementProps;

  export const Box: React.FC<BoxProps>;

  // Breadcrumb component

  interface BreadcrumbItem {
    url: string;
    active?: boolean;
    name?: React.ReactNode;
  }

  type BreadcrumbProps = {
    separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
    size?: Size;
    align?: 'right' | 'center';
    items?: BreadcrumbItem[];
    hrefAttr?: string;
  } & ElementProps;

  export const Breadcrumb: React.FC<BreadcrumbProps>;

  // Button component

  type ButtonProps = {
    onClick?: () => void;
    color?: Color;
    size?: Size;
    state?: 'hover' | 'focus' | 'active' | 'loading';
    outlined?: boolean;
    inverted?: boolean;
    submit?: boolean;
    reset?: boolean;
    loading?: boolean;
    fullwidth?: boolean;
    disabled?: boolean;
    remove?: boolean;
    isSelected?: boolean;
    isStatic?: boolean;
    rounded?: boolean;
    text?: boolean;
  } & ElementProps;

  type ButtonGroupProps = {
    size?: Size;
    hasAddons?: boolean;
    position?: 'centered' | 'right';
  } & ElementProps;

  export const Button: React.FC<ButtonProps> & {
    Group: React.FC<ButtonGroupProps>;
  };

  // Card component

  type CardProps = {} & ElementProps;

  export const Card: React.FC<CardProps>;

  // Column component

  type ColumnGroupProps = {
    variableGap?: {
      [breakpoint in Breakpoint]: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    };
    breakpoint?: Breakpoint;
    gapless?: boolean;
    multiline?: boolean;
    centered?: boolean;
    vCentered?: boolean;
  } & ElementProps;

  type ColumnSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  interface ColumnBreakpointConfiguration {
    size?: ColumnSize;
    offset?: ColumnSize;
    narrow?: boolean;
  }

  type ColumnProps = {
    size?: ColumnSize;
    offset?: ColumnSize;
    narrow?: boolean;
    touch?: ColumnBreakpointConfiguration;
    mobile?: ColumnBreakpointConfiguration;
    tablet?: ColumnBreakpointConfiguration;
    desktop?: ColumnBreakpointConfiguration;
    widescreen?: ColumnBreakpointConfiguration;
    fullhd?: ColumnBreakpointConfiguration;
  } & ElementProps;

  export const Columns: React.FC<ColumnGroupProps> & {
    Column: React.FC<ColumnProps>;
  };

  // Container component

  type ContainerProps = {
    fluid?: boolean;
    breakpoint?: Breakpoint;
  } & ElementProps;

  export const Container: React.FC<ContainerProps>;

  // Content component

  type ContentProps = {
    size?: Size;
  } & ElementProps;

  export const Content: React.FC<ContentProps>;

  // Dropdown component

  type DropdownProps<T> = {
    value?: T;
    onChange?: (newValue: T) => void;
    color?: Color;
    hoverable?: boolean;
    label?: React.ReactNode;
    closeOnSelect?: boolean;
    right?: boolean;
    up?: boolean;
    align?: 'right';
  } & ElementProps;

  export const Dropdown: <T>(
    props: DropdownProps<T>,
  ) => React.ReactElement & React.ComponentClass<DropdownProps<T>>;
}
