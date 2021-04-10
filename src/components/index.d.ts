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
  srOnly?: boolean;
}

type SpacingSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | Number | String;

interface SpacingProps {
  m?: SpacingSize;
  mt?: SpacingSize;
  mr?: SpacingSize;
  mb?: SpacingSize;
  ml?: SpacingSize;
  mx?: SpacingSize;
  my?: SpacingSize;
  p?: SpacingSize;
  pt?: SpacingSize;
  pr?: SpacingSize;
  pb?: SpacingSize;
  pl?: SpacingSize;
  px?: SpacingSize;
  py?: SpacingSize;
}

interface FlexboxProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'baseline';
  alignItems?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
}

type DisplayModifier =
  | 'relative'
  | 'block'
  | 'flex'
  | 'inline'
  | 'inline-block'
  | 'inline-flex'
  | 'hidden';

export interface ResponsiveModifiers {
  display?: DisplayModifier;
  textSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | Number | String;
  invisible?: Boolean;
  textAlign?: 'center' | 'justify' | 'left' | 'right';
}

interface ResponsiveProps {
  display?: DisplayModifier;
  mobile?: ResponsiveModifiers;
  tablet?: ResponsiveModifiers & { only?: Boolean; };
  desktop?: ResponsiveModifiers & { only?: Boolean; };
  widescreen?: ResponsiveModifiers & { only?: Boolean; };
  fullhd?: ResponsiveModifiers;
  touch?: ResponsiveModifiers;
  untilWidescreen?: ResponsiveModifiers;
  untilFullhd?: ResponsiveModifiers;
}

interface ColorProps {
  textColor?: string;
  backgroundColor?: string;
  colorVariant?: 'light' | 'dark' | String;
}

interface TypographyProps {
  textSize?: 1 | 2 | 3 | 4 | 5 | 6 | Number | String;
  textAlign?: 'center' | 'justify' | 'left' | 'right' | String;
  textTransform?: 'capitalized' | 'lowercase' | 'uppercase';
  textWeight?: 'light' | 'normal' | 'semibold' | 'bold';
  textFamily?: 'sans-serif' | 'monospace' | 'primary' | 'secondary' | 'code' | String;
  italic?: boolean;
}

type HTMLAttributes<K extends keyof JSX.IntrinsicElements> = OmitKeys<
  JSX.IntrinsicElements[K],
  keyof ModifierProps | 'ref'
>;

type ModifierProps = SpacingProps &
  FlexboxProps &
  HelperProps &
  ColorProps &
  ResponsiveProps &
  TypographyProps;

/**
 * Defines all Bulma color values
 */
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
  | 'link'
  | String;

/**
 * Defines all Bulma size values
 */
export type Size = 'small' | 'medium' | 'large' | String;

/**
 * Defines all Bulma breakpoint values
 */
export type Breakpoint =
  | 'desktop'
  | 'tablet'
  | 'mobile'
  | 'widescreen'
  | 'fullhd'
  | 'touch'
  | String;

type RenderAsComponentProps<
  TComponent
> = TComponent extends keyof JSX.IntrinsicElements
  ? HTMLAttributes<TComponent>
  : TComponent extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : never;

export type OmitKeys<T, U> = Pick<T, Exclude<keyof T, U>>;

export type RenderAsComponent = React.ElementType;

export type ElementProps<
  TProps,
  TComponent extends RenderAsComponent
> = ModifierProps & {
  className?: string;
  domRef?: React.RefObject<TComponent>;
  renderAs?: TComponent;
  style?: React.CSSProperties;
  display?: DisplayModifier;
  invisible?: boolean;
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
