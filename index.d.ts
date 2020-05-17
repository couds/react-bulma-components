declare module 'react-bulma-components' {
  import * as React from 'react';
  import { ReactElement } from 'react';

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

  interface ElementProps
    extends HelperProps,
      ColorProps,
      ResponsiveProps,
      TypographyProps {
    className?: string;
    domRef?: React.RefObject<HTMLElement>;
    renderAs?: React.ReactElement;
  }

  // Below defines all exported components

  // Box component

  interface BoxProps extends ElementProps {}

  export const Box: React.FC<BoxProps>;

  // Breadcrumb component

  interface BreadcrumbItem {
    url: string;
    active?: boolean;
    name?: React.ReactNode;
  }

  interface BreadcrumbProps extends ElementProps {
    separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
    size?: Size;
    align?: 'right' | 'center';
    items?: BreadcrumbItem[];
    hrefAttr?: string;
  }

  export const Breadcrumb: React.FC<BreadcrumbProps>;

  // Button component

  interface ButtonProps extends ElementProps {
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
  }

  interface ButtonGroupProps extends ElementProps {
    size?: Size;
    hasAddons?: boolean;
    position?: 'centered' | 'right';
  }

  export const Button: React.FC<ButtonProps> & {
    Group: React.FC<ButtonGroupProps>;
  };

  // Card component

  interface CardProps extends ElementProps {}

  export const Card: React.FC<CardProps>;

  // Column component

  interface ColumnGroupProps extends ElementProps {
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

  interface ColumnProps extends ElementProps {
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

  export const Columns: React.FC<ColumnGroupProps> & {
    Column: React.FC<ColumnProps>;
  };

  // Container component

  interface ContainerProps extends ElementProps {
    fluid?: boolean;
    breakpoint?: Breakpoint;
  }

  export const Container: React.FC<ContainerProps>;

  // Content component

  interface ContentProps extends ElementProps {
    size?: Size;
  }

  export const Content: React.FC<ContentProps>;

  // Dropdown component

  interface DropdownProps<T> extends ElementProps {
    value?: T;
    onChange?: (newValue: T) => void;
    color?: Color;
    hoverable?: boolean;
    label?: React.ReactNode;
    closeOnSelect?: boolean;
    right?: boolean;
    up?: boolean;
    align?: 'right';
  }

  export const Dropdown: <T>() => ReactElement &
    React.ComponentClass<DropdownProps<T>>;
}
