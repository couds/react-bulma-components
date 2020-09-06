import * as React from 'react';

type OmitKeys<T, U> = Pick<T, Exclude<keyof T, U>>;

export type Color =
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

export type Size = 'small' | 'medium' | 'large';

export type Breakpoint =
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

type HTMLAttributes<K extends keyof JSX.IntrinsicElements> = OmitKeys<
  JSX.IntrinsicElements[K],
  keyof ModifierProps | 'ref'
>;

// Credit to https://stackoverflow.com/questions/54049871/how-do-i-type-this-as-jsx-attribute-in-typescript

export type RenderAsComponent = string | React.ComponentType<never>;

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

export type ElementProps<
  TProps,
  TComponent extends RenderAsComponent
> = ModifierProps & {
  className?: string;
  domRef?: React.RefObject<TComponent>;
  renderAs?: TComponent;
  style?: React.CSSProperties;
} & OmitKeys<RenderAsComponentProps<TComponent>, keyof TProps>;

export type BulmaComponent<
  TProps,
  TDefaultHTMLElement extends RenderAsComponent
> = <TComponent extends RenderAsComponent = TDefaultHTMLElement>(
  props: TProps & ElementProps<TProps, TComponent>,
) => React.ReactElement;

export type BulmaComponentWithoutRenderAs<
  TProps,
  THTMLElement extends RenderAsComponent
> = (
  props: TProps & Omit<ElementProps<TProps, THTMLElement>, 'renderAs'>,
) => React.ReactElement;

export type BulmaComponentWithoutModifiers<TProps> = (
  props: TProps,
) => React.ReactElement;

export { Box } from './src/components/box';
export { Breadcrumb } from './src/components/breadcrumb';
export { Button } from './src/components/button';
export { Card } from './src/components/card';
export { Container } from './src/components/container';
export { Columns } from './src/components/columns';
export { Content } from './src/components/content';
export { Dropdown } from './src/components/dropdown';
export { Image } from './src/components/image';

declare module 'react-bulma-components' {
  // Footer component

  export const Footer: BulmaComponent<{}, 'div'>;

  // Form components

  interface FieldProps {
    align?: 'centered' | 'right';
    kind?: 'addons' | 'group';
    multiline?: boolean;
    horizontal?: boolean;
  }

  interface FieldLabelProps {
    size?: Size | 'small';
  }

  interface ControlProps {
    fullwidth?: boolean;
    iconLeft?: boolean;
    iconRight?: boolean;
    loading?: boolean;
    size?: Size;
  }

  interface InputProps<T> {
    type?:
      | 'text'
      | 'email'
      | 'tel'
      | 'password'
      | 'number'
      | 'search'
      | 'color'
      | 'date'
      | 'time'
      | 'datetime-local';
    size?: Size;
    color?: Color;
    readOnly?: boolean;
    isStatic?: boolean;
    value?: T;
  }

  interface LabelProps {
    size?: Size;
  }

  interface TextareaProps {
    size?: Size;
    color?: Color;
    readOnly?: boolean;
  }

  interface SelectProps<T> {
    size?: Size;
    color?: Color;
    readOnly?: boolean;
    value?: T;
    loading?: boolean;
    multiple?: boolean;
  }

  interface CheckboxProps {
    value?: string;
  }

  interface RadioProps {
    value?: string;
  }

  interface HelpProps {
    color?: Color;
  }

  interface InputFileProps {
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
    color?: Color;
    size?: Size;
    fileName?: string;
    fullwidth?: boolean;
    right?: boolean;
    boxed?: boolean;
    label?: string;
    icon?: React.ReactElement;
    inputProps?: HTMLAttributes<'input'>;
  }

  export const Form: {
    Field: BulmaComponent<FieldProps, 'div'> & {
      Label: BulmaComponent<FieldLabelProps, 'div'>;
      Body: BulmaComponent<{}, 'div'>;
    };
    Control: BulmaComponent<ControlProps, 'div'>;
    Input: <TValue>(
      props: OmitKeys<
        InputProps<TValue> & ElementProps<InputProps<TValue>, 'input'>,
        'renderAs' | 'readonly'
      >,
    ) => React.ReactElement;
    Label: BulmaComponentWithoutRenderAs<LabelProps, 'label'>;
    Textarea: (
      props: OmitKeys<
        TextareaProps & ElementProps<TextareaProps, 'textarea'>,
        'renderAs' | 'readonly'
      >,
    ) => React.ReactElement;
    Select: <TValue>(
      props: OmitKeys<
        SelectProps<TValue> & ElementProps<SelectProps<TValue>, 'select'>,
        'renderAs' | 'readonly'
      >,
    ) => React.ReactElement;
    Checkbox: (
      props: OmitKeys<
        CheckboxProps & ElementProps<CheckboxProps, 'input'>,
        'renderAs'
      >,
    ) => React.ReactElement;
    Radio: (
      props: OmitKeys<
        RadioProps & ElementProps<RadioProps, 'input'>,
        'renderAs'
      >,
    ) => React.ReactElement;
    Help: BulmaComponent<HelpProps, 'p'>;
    InputFile: BulmaComponent<InputFileProps, 'div'>;
  };

  // Heading component

  interface HeadingProps {
    size?: 1 | 2 | 3 | 4 | 5 | 6;
    weight?: 'light' | 'normal' | 'semibold' | 'bold';
    subtitle?: boolean;
    heading?: boolean;
    spaced?: boolean;
  }

  export const Heading: BulmaComponent<HeadingProps, 'h1'>;

  // Hero component

  interface HeroProps {
    color?: Color;
    gradient?: boolean;
    size?: Size | 'fullheight';
    hasNavbar?: boolean;
  }

  export const Hero: BulmaComponent<HeroProps, 'section'> & {
    Head: BulmaComponent<{}, 'div'>;
    Body: BulmaComponent<{}, 'div'>;
    Footer: BulmaComponent<{}, 'div'>;
  };

  // Icon component

  interface IconProps {
    icon?: string;
    size?: Size | 'auto';
    align?: 'left' | 'right';
    color?: Color;
  }

  export const Icon: BulmaComponentWithoutRenderAs<IconProps, 'span'>;

  // Level component

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

  // Loader component

  export const Loader: BulmaComponent<{}, 'div'>;

  // Media component

  interface MediaItemProps {
    position?: 'center' | 'right' | 'left';
  }

  export const Media: BulmaComponent<{}, 'article'> & {
    Item: BulmaComponent<MediaItemProps, 'div'>;
    Content: BulmaComponent<{}, 'div'>;
  };

  // Menu component

  interface MenuListComponentProps {
    title?: React.ReactNode;
  }

  interface MenuListItemProps {
    active?: boolean;
    children?: string[] | React.ReactElement[];
  }

  export const Menu: BulmaComponent<{}, 'aside'> & {
    List: BulmaComponentWithoutRenderAs<MenuListComponentProps, 'ul'> & {
      Item: BulmaComponent<MenuListItemProps, 'a'>;
    };
  };

  // Message component

  interface MessageProps {
    size?: Size;
    color?: Color;
  }

  // Modal component

  interface ModalProps {
    show?: boolean;
    onClose?: () => void;
    closeOnEsc?: boolean;
    closeOnBlur?: boolean;
    showClose?: boolean;
    domRef?: React.RefObject<HTMLDivElement>;
  }

  interface ModalCardHeadProps {
    showClose?: boolean;
    onClose?: () => void;
  }

  export const Modal: BulmaComponentWithoutModifiers<ModalProps> & {
    Content: BulmaComponent<{}, 'div'>;
    Card: BulmaComponent<{}, 'div'> & {
      Head: BulmaComponent<ModalCardHeadProps, 'header'>;
      Body: BulmaComponent<{}, 'section'>;
      Footer: BulmaComponent<{}, 'footer'>;
      Title: BulmaComponent<{}, 'p'>;
    };
  };

  export const Message: BulmaComponent<MessageProps, 'article'> & {
    Body: BulmaComponent<{}, 'div'>;
    Header: BulmaComponent<{}, 'div'>;
  };

  // Navbar component

  interface NavbarProps {
    transparent?: boolean;
    fixed?: 'top' | 'bottom';
    color?: Color;
    active?: boolean;
  }

  interface NavbarBurgerProps {
    onClick?: () => void;
  }

  interface NavbarItemProps {
    active?: boolean;
    dropdown?: boolean;
    dropdownUp?: boolean;
    hoverable?: boolean;
    arrowless?: boolean;
  }

  interface NavbarDropdownProps {
    boxed?: boolean;
    right?: boolean;
  }

  interface NavbarLinkProps {
    arrowless?: boolean;
  }

  interface NavbarContainerProps {
    position: 'start' | 'end';
  }

  export const Navbar: BulmaComponent<NavbarProps, 'nav'> & {
    Brand: BulmaComponent<{}, 'div'>;
    Burger: BulmaComponent<NavbarBurgerProps, 'div'>;
    Menu: BulmaComponent<{}, 'div'>;
    Item: BulmaComponent<NavbarItemProps, 'a'>;
    Dropdown: BulmaComponent<NavbarDropdownProps, 'span'>;
    Link: BulmaComponent<NavbarLinkProps, 'span'>;
    Divider: BulmaComponent<{}, 'div'>;
    Container: BulmaComponent<NavbarContainerProps, 'div'>;
  };

  // Notification component

  interface NotificationProps {
    color?: Color;
  }

  export const Notification: BulmaComponent<NotificationProps, 'div'>;

  // Pagination component

  interface PaginationProps {
    current?: number;
    disabled?: boolean;
    total?: number;
    delta?: number;
    onChange?: (page: number) => void;
    next?: React.ReactNode;
    previous?: React.ReactNode;
    showPrevNext?: boolean;
    autoHide?: boolean;
  }

  export const Pagination: BulmaComponent<PaginationProps, 'nav'>;

  // Panel component

  interface PanelProps {
    color?: Color;
  }

  interface PanelTabProps {
    active?: boolean;
  }

  interface PanelBlockProps {
    active?: boolean;
  }

  export const Panel: BulmaComponent<PanelProps, 'nav'> & {
    Header: BulmaComponent<{}, 'div'>;
    Tabs: BulmaComponent<{}, 'div'> & {
      Tab: BulmaComponent<PanelTabProps, 'a'>;
    };
    Block: BulmaComponent<PanelBlockProps, 'div'>;
    Icon: BulmaComponent<{}, 'span'>;
  };

  // Progress component

  interface ProgressProps {
    value: number;
    max: number;
    size?: Size;
  }

  export const Progress: BulmaComponentWithoutRenderAs<
    ProgressProps,
    'progress'
  >;

  // Section component

  interface SectionProps {
    size?: Exclude<Size, 'small'>;
  }

  export const Section: BulmaComponent<SectionProps, 'section'>;

  // Table component

  interface TableProps {
    size?: 'fullwidth' | 'narrow';
    striped?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
  }

  export const Table: BulmaComponentWithoutRenderAs<TableProps, 'table'> & {
    Container: BulmaComponent<{}, 'div'>;
  };

  // Tabs component

  interface TabsProps {
    align?: 'centered' | 'right';
    size?: Size;
    type?: 'toggle' | 'boxed' | 'toggle-rounded';
    fullwidth?: boolean;
  }

  interface TabProps {
    active?: boolean;
  }

  export const Tabs: BulmaComponent<TabsProps, 'div'> & {
    Tab: BulmaComponent<TabProps, 'a'>;
  };

  // Tag component

  interface TagProps {
    color?: Color;
    size?: Exclude<Size, 'small'>;
    rounded?: boolean;
    remove?: boolean;
  }

  interface TagGroupProps {
    gapless?: boolean;
  }

  export const Tag: BulmaComponent<TagProps, 'span'> & {
    Group: BulmaComponentWithoutRenderAs<TagGroupProps, 'span'>;
  };

  // Tile component

  interface TileProps {
    kind?: 'ancestor' | 'parent' | 'child';
    vertical?: boolean;
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    color?: Color;
    notification?: boolean;
  }

  export const Tile: BulmaComponent<TileProps, 'div'>;
}
