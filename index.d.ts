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
      | ({ renderAs: 'abbr' } & HTMLAttributes<'abbr'>)
      | ({ renderAs: 'address' } & HTMLAttributes<'address'>)
      | ({ renderAs: 'area' } & HTMLAttributes<'area'>)
      | ({ renderAs: 'article' } & HTMLAttributes<'article'>)
      | ({ renderAs: 'aside' } & HTMLAttributes<'aside'>)
      | ({ renderAs: 'base' } & HTMLAttributes<'base'>)
      | ({ renderAs: 'bdi' } & HTMLAttributes<'bdi'>)
      | ({ renderAs: 'bdo' } & HTMLAttributes<'bdo'>)
      | ({ renderAs: 'big' } & HTMLAttributes<'big'>)
      | ({ renderAs: 'blockquote' } & HTMLAttributes<'blockquote'>)
      | ({ renderAs: 'body' } & HTMLAttributes<'body'>)
      | ({ renderAs: 'br' } & HTMLAttributes<'br'>)
      | ({ renderAs: 'button' } & HTMLAttributes<'button'>)
      | ({ renderAs: 'canvas' } & HTMLAttributes<'canvas'>)
      | ({ renderAs: 'caption' } & HTMLAttributes<'caption'>)
      | ({ renderAs: 'cite' } & HTMLAttributes<'cite'>)
      | ({ renderAs: 'code' } & HTMLAttributes<'code'>)
      | ({ renderAs: 'col' } & HTMLAttributes<'col'>)
      | ({ renderAs: 'colgroup' } & HTMLAttributes<'colgroup'>)
      | ({ renderAs: 'datalist' } & HTMLAttributes<'datalist'>)
      | ({ renderAs: 'dd' } & HTMLAttributes<'dd'>)
      | ({ renderAs: 'del' } & HTMLAttributes<'del'>)
      | ({ renderAs: 'details' } & HTMLAttributes<'details'>)
      | ({ renderAs: 'dfn' } & HTMLAttributes<'dfn'>)
      | ({ renderAs: 'div' } & HTMLAttributes<'div'>)
      | ({ renderAs: 'dl' } & HTMLAttributes<'dl'>)
      | ({ renderAs: 'dt' } & HTMLAttributes<'dt'>)
      | ({ renderAs: 'em' } & HTMLAttributes<'em'>)
      | ({ renderAs: 'fieldset' } & HTMLAttributes<'fieldset'>)
      | ({ renderAs: 'figcaption' } & HTMLAttributes<'figcaption'>)
      | ({ renderAs: 'figure' } & HTMLAttributes<'figure'>)
      | ({ renderAs: 'footer' } & HTMLAttributes<'footer'>)
      | ({ renderAs: 'form' } & HTMLAttributes<'form'>)
      | ({ renderAs: 'h1' } & HTMLAttributes<'h1'>)
      | ({ renderAs: 'h2' } & HTMLAttributes<'h2'>)
      | ({ renderAs: 'h3' } & HTMLAttributes<'h3'>)
      | ({ renderAs: 'h4' } & HTMLAttributes<'h4'>)
      | ({ renderAs: 'h5' } & HTMLAttributes<'h5'>)
      | ({ renderAs: 'h6' } & HTMLAttributes<'h6'>)
      | ({ renderAs: 'head' } & HTMLAttributes<'head'>)
      | ({ renderAs: 'header' } & HTMLAttributes<'header'>)
      | ({ renderAs: 'hgroup' } & HTMLAttributes<'hgroup'>)
      | ({ renderAs: 'hr' } & HTMLAttributes<'hr'>)
      | ({ renderAs: 'i' } & HTMLAttributes<'i'>)
      | ({ renderAs: 'img' } & HTMLAttributes<'img'>)
      | ({ renderAs: 'input' } & HTMLAttributes<'input'>)
      | ({ renderAs: 'ins' } & HTMLAttributes<'ins'>)
      | ({ renderAs: 'kbd' } & HTMLAttributes<'kbd'>)
      | ({ renderAs: 'label' } & HTMLAttributes<'label'>)
      | ({ renderAs: 'legend' } & HTMLAttributes<'legend'>)
      | ({ renderAs: 'li' } & HTMLAttributes<'li'>)
      | ({ renderAs: 'link' } & HTMLAttributes<'link'>)
      | ({ renderAs: 'main' } & HTMLAttributes<'main'>)
      | ({ renderAs: 'mark' } & HTMLAttributes<'mark'>)
      | ({ renderAs: 'menu' } & HTMLAttributes<'menu'>)
      | ({ renderAs: 'menuitem' } & HTMLAttributes<'menuitem'>)
      | ({ renderAs: 'meter' } & HTMLAttributes<'meter'>)
      | ({ renderAs: 'nav' } & HTMLAttributes<'nav'>)
      | ({ renderAs: 'ol' } & HTMLAttributes<'ol'>)
      | ({ renderAs: 'output' } & HTMLAttributes<'output'>)
      | ({ renderAs: 'p' } & HTMLAttributes<'p'>)
      | ({ renderAs: 'pre' } & HTMLAttributes<'pre'>)
      | ({ renderAs: 'progress' } & HTMLAttributes<'progress'>)
      | ({ renderAs: 'q' } & HTMLAttributes<'q'>)
      | ({ renderAs: 'rp' } & HTMLAttributes<'rp'>)
      | ({ renderAs: 'rt' } & HTMLAttributes<'rt'>)
      | ({ renderAs: 'ruby' } & HTMLAttributes<'ruby'>)
      | ({ renderAs: 'samp' } & HTMLAttributes<'samp'>)
      | ({ renderAs: 'section' } & HTMLAttributes<'section'>)
      | ({ renderAs: 'small' } & HTMLAttributes<'small'>)
      | ({ renderAs: 'span' } & HTMLAttributes<'span'>)
      | ({ renderAs: 'sub' } & HTMLAttributes<'sub'>)
      | ({ renderAs: 'summary' } & HTMLAttributes<'summary'>)
      | ({ renderAs: 'sup' } & HTMLAttributes<'sup'>)
      | ({ renderAs: 'table' } & HTMLAttributes<'table'>)
      | ({ renderAs: 'tbody' } & HTMLAttributes<'tbody'>)
      | ({ renderAs: 'td' } & HTMLAttributes<'td'>)
      | ({ renderAs: 'textarea' } & HTMLAttributes<'textarea'>)
      | ({ renderAs: 'tfoot' } & HTMLAttributes<'tfoot'>)
      | ({ renderAs: 'th' } & HTMLAttributes<'th'>)
      | ({ renderAs: 'thead' } & HTMLAttributes<'thead'>)
      | ({ renderAs: 'time' } & HTMLAttributes<'time'>)
      | ({ renderAs: 'title' } & HTMLAttributes<'title'>)
      | ({ renderAs: 'tr' } & HTMLAttributes<'tr'>)
      | ({ renderAs: 'ul' } & HTMLAttributes<'ul'>));

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
