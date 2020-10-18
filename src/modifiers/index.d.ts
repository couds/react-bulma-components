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

interface ResponsiveModifiers {
  display?: 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex';
  hide?: boolean;
  textSize?: 1 | 2 | 3 | 4 | 5 | 6;
  textAlignment?: 'centered' | 'justified' | 'left' | 'right';
}

interface ResponsiveProps {
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
  italic?: boolean;
}

type HTMLAttributes<K extends keyof JSX.IntrinsicElements> = OmitKeys<
  JSX.IntrinsicElements[K],
  keyof ModifierProps | 'ref'
>;

// Credit to https://stackoverflow.com/questions/54049871/how-do-i-type-this-as-jsx-attribute-in-typescript

type ModifierProps = HelperProps &
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
