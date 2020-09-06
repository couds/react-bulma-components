import * as React from 'react';

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

export type OmitKeys<T, U> = Pick<T, Exclude<keyof T, U>>;

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

export { Box } from './components/box';
export { Breadcrumb } from './components/breadcrumb';
export { Button } from './components/button';
export { Card } from './components/card';
export { Container } from './components/container';
export { Columns } from './components/columns';
export { Content } from './components/content';
export { Dropdown } from './components/dropdown';
export { Footer } from './components/footer';
export { Form } from './components/form';
export { Heading } from './components/heading';
export { Hero } from './components/hero';
export { Icon } from './components/icon';
export { Image } from './components/image';
export { Level } from './components/level';
export { Loader } from './components/loader';
export { Media } from './components/media';
export { Message } from './components/message';
export { Modal } from './components/modal';
export { Navbar } from './components/navbar';
export { Notification } from './components/notification';
export { Pagination } from './components/pagination';
export { Panel } from './components/panel';
export { Progress } from './components/progress';
export { Section } from './components/section';
export { Table } from './components/table';
export { Tabs } from './components/tabs';
