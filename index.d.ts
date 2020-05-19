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

  // Credit to https://stackoverflow.com/questions/54049871/how-do-i-type-this-as-jsx-attribute-in-typescript

  type RenderAsComponent = string | React.ComponentType<never>;

  type RenderAsComponentProps<
    TComponent
  > = TComponent extends keyof JSX.IntrinsicElements
    ? HTMLAttributes<TComponent>
    : TComponent extends React.ComponentType<infer Props>
    ? Props & JSX.IntrinsicAttributes
    : never;

  type ModifierProps = HelperProps &
    ColorProps &
    ResponsiveProps &
    TypographyProps;

  type ElementProps<
    TComponent extends RenderAsComponent,
    TProps
  > = ModifierProps & {
    className?: string;
    domRef?: React.RefObject<HTMLElement>;
    renderAs?: TComponent;
    style?: React.CSSProperties;
  } & Pick<
      RenderAsComponentProps<TComponent>,
      Exclude<keyof RenderAsComponentProps<TComponent>, keyof TProps>
    >;

  type BulmaComponent<TProps, TDefaultHTMLElement extends RenderAsComponent> = <
    TComponent extends RenderAsComponent = TDefaultHTMLElement
  >(
    props: TProps & ElementProps<TDefaultHTMLElement, TComponent>,
  ) => React.ReactElement;

  // Below defines all exported components

  // Box component

  type BoxProps = {};

  export const Box: BulmaComponent<BoxProps, 'div'>;

  // Breadcrumb component

  interface BreadcrumbItem {
    url: string;
    active?: boolean;
    name?: React.ReactNode;
  }

  interface BreadcrumbProps {
    separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
    size?: Size;
    align?: 'right' | 'center';
    items?: BreadcrumbItem[];
    hrefAttr?: string;
  }

  export const Breadcrumb: BulmaComponent<BreadcrumbProps, 'a'>;

  // Button component

  interface ButtonProps {
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

  interface ButtonGroupProps {
    size?: Size;
    hasAddons?: boolean;
    position?: 'centered' | 'right';
  }

  export const Button: BulmaComponent<ButtonProps, 'button'> & {
    Group: BulmaComponent<ButtonGroupProps, 'div'>;
  };

  // Card component

  interface CardProps {}

  interface CardImageProps {}

  export const Card: BulmaComponent<CardProps, 'div'> & {
    Image: BulmaComponent<CardImageProps, 'figure'>;
  };

  // Column component

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

  // Container component

  interface ContainerProps {
    fluid?: boolean;
    breakpoint?: Breakpoint;
  }

  export const Container: BulmaComponent<ContainerProps, 'div'>;

  // Content component

  interface ContentProps {
    size?: Size;
  }

  export const Content: BulmaComponent<ContentProps, 'div'>;

  // Dropdown component

  interface DropdownProps<T> {
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

  export const Dropdown: <TValue, TComponent extends RenderAsComponent = 'div'>(
    props: DropdownProps<TValue> &
      Pick<
        ElementProps<TComponent, DropdownProps<TValue>>,
        Exclude<
          keyof ElementProps<TComponent, DropdownProps<TValue>>,
          keyof DropdownProps<TValue>
        >
      >,
  ) => React.ReactElement;
}
