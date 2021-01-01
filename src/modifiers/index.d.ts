import { OmitKeys } from '../components';

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

type SpacingSize = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface SpacingProps {
  mt?: SpacingSize;
  mr?: SpacingSize;
  mb?: SpacingSize;
  ml?: SpacingSize;
  mx?: SpacingSize;
  my?: SpacingSize;
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
  | 'block'
  | 'flex'
  | 'inline'
  | 'inline-block'
  | 'inline-flex';

interface ResponsiveModifiers {
  display?: DisplayModifier;
  hide?: boolean;
  textSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  textAlignment?: 'centered' | 'justified' | 'left' | 'right';
}

interface ResponsiveProps {
  display?: DisplayModifier;
  mobile?: ResponsiveModifiers;
  tablet?: ResponsiveModifiers;
  desktop?: ResponsiveModifiers;
  widescreen?: ResponsiveModifiers;
  fullhd?: ResponsiveModifiers;
  touch?: ResponsiveModifiers;
  mobileOnly?: ResponsiveModifiers;
  tabletOnly?: ResponsiveModifiers;
  desktopOnly?: ResponsiveModifiers;
  widescreenOnly?: ResponsiveModifiers;
  fullhdOnly?: ResponsiveModifiers;
  touchOnly?: ResponsiveModifiers;
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
  textFamily?: 'sans-serif' | 'monospace' | 'primary' | 'secondary' | 'code';
  italic?: boolean;
}

type HTMLAttributes<K extends keyof JSX.IntrinsicElements> = OmitKeys<
  JSX.IntrinsicElements[K],
  keyof ModifierProps | 'ref'
>;

// Credit to https://stackoverflow.com/questions/54049871/how-do-i-type-this-as-jsx-attribute-in-typescript

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
  | 'link';

/**
 * Defines all Bulma size values
 */
export type Size = 'small' | 'medium' | 'large';

/**
 * Defines all Bulma breakpoint values
 */
export type Breakpoint =
  | 'desktop'
  | 'tablet'
  | 'mobile'
  | 'widescreen'
  | 'fullhd'
  | 'touch';
