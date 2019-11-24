import * as React from "react";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Color =
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark"
  | "white"
  | "black"
  | "link";
type GreyColor =
  | "black-bis"
  | "black-ter"
  | "grey-darker"
  | "grey-dark"
  | "grey"
  | "grey-light"
  | "grey-lighter"
  | "white-ter"
  | "white-bis";

type Breakpoint = "desktop" | "tablet" | "mobile" | "widescreen" | "fullhd";

// https://github.com/couds/react-bulma-components/blob/master/src/modifiers/colors.js
interface ColorProps {
  textColor?: Color | GreyColor;
  backgroundColor?: Color | GreyColor;
}

// https://github.com/couds/react-bulma-components/blob/master/src/modifiers/helpers.js
interface HelperProps {
  clearfix?: boolean;
  pull?: "right" | "left";
  marginless?: boolean;
  paddingless?: boolean;
  overlay?: boolean;
  clipped?: boolean;
  radiusless?: boolean;
  shadowless?: boolean;
  // https://github.com/couds/react-bulma-components/issues/112
  // unselectable?: "on" | "off";
  unselectable?: boolean;
  invisible?: boolean;
  hidden?: boolean;
}

// https://github.com/couds/react-bulma-components/blob/master/src/modifiers/responsives.js
interface ResponsiveSizeProps {
  display?: {
    value?: "block" | "flex" | "inline" | "inline-block" | "inline-flex";
    only?: boolean;
  };
  hide?: {
    value?: boolean;
    only?: boolean;
  };
  textSize?: {
    value?: 1 | 2 | 3 | 4 | 5 | 6;
  };
  textAlignment?: {
    value?: "centered" | "justified" | "left" | "right";
    only?: boolean;
  };
}

interface ResponsiveProps {
  responsive?: {
    mobile?: ResponsiveSizeProps;
    tablet?: ResponsiveSizeProps;
    desktop?: ResponsiveSizeProps;
    widescreen?: ResponsiveSizeProps;
    fullhd?: ResponsiveSizeProps;
    touch?: ResponsiveSizeProps;
  };
}

// https://github.com/couds/react-bulma-components/blob/master/src/modifiers/typography.js
interface TypographyProps {
  textSize?: 1 | 2 | 3 | 4 | 5 | 6;
  textAlignment?: "centered" | "justified" | "left" | "right";
  textTransform?: "capitalized" | "lowercase" | "uppercase";
  textWeight?: "light" | "normal" | "semibold" | "bold";
  italic?: boolean;
}

// https://github.com/couds/react-bulma-components/blob/master/src/modifiers/index.js
type ModifierProps = ColorProps &
  HelperProps &
  ResponsiveProps &
  TypographyProps;

/*** Box ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/box/box.js
interface BoxProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
declare const Box: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<BoxProps> & React.RefAttributes<any>
>;

/*** Breadcrumb ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/breadcrumb/breadcrumb.js
interface BreadcrumbModifierProps {
  separator?: "arrow" | "bullet" | "dot" | "succeeds";
  size?: "small" | "medium" | "large";
  align?: "right" | "center";
  items?: Array<{ url: string; active?: boolean; name?: React.ReactNode }>;
  hrefAttr?: string;
}
interface BreadcrumbProps
  extends ModifierProps,
    BreadcrumbModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"a">, "unselectable">> {
  className?: string;
  style?: {};
  renderAs?: "a" | React.ComponentType<any>;
  // [key: string]: any; // Footnote [0]
}
declare const Breadcrumb: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<BreadcrumbProps> & React.RefAttributes<any>
>;

/*** Button ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/button/button.js
interface ButtonModifierProps {
  size?: "small" | "medium" | "large";
  state?: "hover" | "focus" | "active" | "loading";
  color?: Color;
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
interface ButtonProps
  extends ModifierProps,
    ButtonModifierProps,
    Partial<
      Omit<
        React.ComponentPropsWithoutRef<"a" | "button" | "span">,
        "color" | "unselectable"
      >
    > {
  children?: React.ReactNode;
  className?: string;
  style?: {};
  renderAs?: "a" | "button" | "span" | React.ComponentType<any>;
  onClick?: React.MouseEventHandler<any>;
  // [key: string]: any; // Footnote [0]
}
interface Button
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ButtonProps> & React.RefAttributes<any>
  > {
  Group: typeof ButtonGroup;
}
declare const Button: Button;

// https://github.com/couds/react-bulma-components/blob/master/src/components/button/components/button-group.js
interface ButtonGroupModifierProps {
  hasAddons?: boolean;
  position?: "centered" | "right";
}
type ButtonGroupProps = ElementProps & ButtonGroupModifierProps;
declare const ButtonGroup: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ButtonGroupProps> & React.RefAttributes<any>
>;

/*** Card ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/card/card.js
interface CardProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
interface Card
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<CardProps> & React.RefAttributes<any>
  > {
  Content: typeof CardContent;
  Image: typeof CardImage;
  Header: typeof CardHeader;
  Footer: typeof CardFooter;
}
declare const Card: Card;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/content.js
type CardContentProps = ElementProps;
declare const CardContent: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CardContentProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/image.js
type CardImageProps = ModifierProps & ImageProps;
declare const CardImage: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CardImageProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/footer/footer.js
type CardFooterProps = ElementProps;
interface CardFooter
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<CardFooterProps> & React.RefAttributes<any>
  > {
  Item: typeof CardFooterItem;
}
declare const CardFooter: CardFooter;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/footer/components/footer-item.js
type CardFooterItemProps = ElementProps;
declare const CardFooterItem: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CardFooterItemProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/header/index.js
type CardHeaderProps = ElementProps;
interface CardHeader
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<CardHeaderProps> & React.RefAttributes<any>
  > {
  Icon: typeof CardHeaderIcon;
  Title: typeof CardHeaderTitle;
}
declare const CardHeader: CardHeader;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/header/components/header-icon.js
type CardHeaderIconProps = ElementProps;
declare const CardHeaderIcon: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CardHeaderIconProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/header/components/header-title.js
type CardHeaderTitleProps = ElementProps;
declare const CardHeaderTitle: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CardHeaderTitleProps> & React.RefAttributes<any>
>;

/*** Columns ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/columns/columns.js
interface ColumnsModifierProps {
  breakpoint?: Breakpoint;
  gapless?: boolean;
  multiline?: boolean;
  centered?: boolean;
}
interface ColumnsProps
  extends ModifierProps,
    ColumnsModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"div">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
}
interface Columns
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ColumnsProps> & React.RefAttributes<"div">
  > {
  Column: typeof Column;
}
declare const Columns: Columns;

// https://github.com/couds/react-bulma-components/blob/master/src/components/columns/components/column.js
type ColumnSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | "three-quarters"
  | "two-thirds"
  | "half"
  | "one-third"
  | "one-quarter"
  | "one-fifth"
  | "two-fifths"
  | "three-fifths"
  | "four-fifths";

interface ColumnSizeModifierProps {
  size?: ColumnSize;
  offset?: ColumnSize;
  narrow?: boolean;
}

interface ColumnModifierProps {
  mobile?: ColumnSizeModifierProps;
  table?: ColumnSizeModifierProps;
  desktop?: ColumnSizeModifierProps;
  widescreen?: ColumnSizeModifierProps;
  fullhd?: ColumnSizeModifierProps;
  // https://bulma.io/documentation/columns/sizes/
  // touch?: ColumnSizing; // todo: shouldn't this be here?
}

interface ColumnProps
  extends ModifierProps,
    ColumnModifierProps,
    ColumnSizeModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"div">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
}
declare const Column: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ColumnProps> & React.RefAttributes<"div">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/container/container.js
interface ContainerProps extends ElementProps {
  children?: React.ReactNode;
}
declare const Container: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ContainerProps> & React.RefAttributes<any>
>;

/*** Content ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/content/content.js
interface ContentModifierProps {
  size: "small" | "medium" | "large";
}
interface ContentProps extends ElementProps {
  children: React.ReactNode;
  className?: string;
  style?: {};
}
declare const Content: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ContentProps> & React.RefAttributes<any>
>;

/*** Dropdown ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/dropdown/dropdown.js
interface DropdownModifierProps {
  color?: Color;
  value?: any;
  onChange?: React.ChangeEventHandler<"div">;
  align?: "right";
  hoverable?: boolean;
  label?: React.ReactNode;
}
interface DropdownProps
  extends ModifierProps,
    DropdownModifierProps,
    Partial<
      Omit<
        React.ComponentPropsWithoutRef<"div">,
        "color" | "onChange" | "unselectable"
      >
    > {
  children?: React.ReactNode;
  className?: string;
  style?: {};
}
interface Dropdown
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<DropdownProps> & React.RefAttributes<"div">
  > {
  Divider: typeof DropdownDivider;
  Item: typeof DropdownItem;
}
declare const Dropdown: Dropdown;

// https://github.com/couds/react-bulma-components/blob/master/src/components/dropdown/components/divider.js
interface DropdownDividerProps
  extends ModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"hr">, "unselectable">> {
  className?: string;
  style?: {};
}
declare const DropdownDivider: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<DropdownDividerProps> & React.RefAttributes<"hr">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/dropdown/components/item.js
interface DropdownItemModifierProps {
  active?: boolean;
  value: any; // todo: should probably be React.ReactNode;
}
interface DropdownItemProps
  extends ModifierProps,
    DropdownItemModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"div">, "unselectable">> {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<any>;
}
declare const DropdownItem: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<DropdownItemProps> & React.RefAttributes<"div">
>;

/*** Element ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/element/element.js
interface ElementProps
  extends ModifierProps,
    Partial<React.ComponentPropsWithoutRef<keyof JSX.IntrinsicElements>> {
  className?: string;
  renderAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  // [key: string]: any; // Footnote [0]
}
declare const Element: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ElementProps> & React.RefAttributes<any>
>;

/*** Footer ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/footer/footer.js
interface FooterProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
declare const Footer: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<FooterProps> & React.RefAttributes<any>
>;

/*** Form ***/
interface Form {
  Checkbox: typeof Checkbox;
  Control: typeof Control;
  Field: typeof Field;
  Help: typeof Help;
  Input: typeof Input;
  InputFile: typeof InputFile;
  Label: typeof Label;
  Radio: typeof Radio;
  Select: typeof Select;
  Textarea: typeof Textarea;
}
declare const Form: Form;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/checkbox.js
interface CheckboxProps
  extends ModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"input">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  name?: string;
}
declare const Checkbox: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<CheckboxProps> & React.RefAttributes<"input">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/control.js
interface ControlModifierProps {
  fullwidth?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  loading?: boolean;
  size?: "small" | "medium" | "large";
}
interface ControlProps extends ElementProps, ControlModifierProps {
  children?: React.ReactNode;
  style?: {};
}
declare const Control: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ControlProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/field/field.js
interface FieldModifierProps {
  align?: "centered" | "right";
  kind?: "addons" | "group";
  mulitline?: boolean;
  horizontal?: boolean;
}
interface FieldProps extends ElementProps, FieldModifierProps {
  children?: React.ReactNode;
  style?: {};
}
interface Field
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<FieldProps> & React.RefAttributes<any>
  > {
  Body: typeof FieldBody;
  Label: typeof FieldLabel;
}
declare const Field: Field;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/help.js
interface FieldBodyProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
declare const FieldBody: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<FieldBodyProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/label.js
interface FieldLabelModifierProps {
  size?: "small" | "normal" | "medium" | "large";
}
interface FieldLabelProps extends ElementProps, FieldLabelModifierProps {
  children?: React.ReactNode;
  style?: {};
}
declare const FieldLabel: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<FieldLabelProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/help.js
interface HelpProps
  extends ModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"p">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  color?: Color;
}
declare const Help: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<HelpProps> & React.RefAttributes<"p">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/input-file.js
interface InputFileModifierProps {
  color?: Color;
  fileName?: boolean;
  fullwidth?: boolean;
  right?: boolean;
  boxed?: boolean;
  label?: string;
  icon?: React.ReactElement<any>;
  size?: "small" | "medium" | "large";
}
interface InputFileProps
  extends ModifierProps,
    InputFileModifierProps,
    Partial<
      Omit<
        React.ComponentPropsWithoutRef<"input">,
        "color" | "size" | "unselectable"
      >
    > {
  className?: string;
  style?: {};
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
declare const InputFile: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<InputFileProps> & React.RefAttributes<"input">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/input.js
interface InputModifierProps {
  color?: Color;
  isStatic?: boolean;
  size?: "small" | "medium" | "large";
}
interface InputProps
  extends ModifierProps,
    InputModifierProps,
    Partial<
      Omit<
        React.ComponentPropsWithoutRef<"input">,
        "color" | "size" | "unselectable"
      >
    > {
  className?: string;
  style?: {};
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  name?: string;
  type?:
    | "text"
    | "email"
    | "tel"
    | "password"
    | "number"
    | "search"
    | "color"
    | "date"
    | "time"
    | "datetime-local";
}
declare const Input: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<InputProps> & React.RefAttributes<"input">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/label.js
interface LabelModifierProps {
  htmlFor?: string;
  size?: "small" | "medium" | "large";
}
interface LabelProps
  extends ModifierProps,
    LabelModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"label">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
}
declare const Label: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<LabelProps> & React.RefAttributes<"label">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/radio.js
interface RadioProps
  extends ModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"input">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
  name: string;
  disabled?: boolean;
  checked?: boolean;
  value?: string;
}
declare const Radio: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<RadioProps> & React.RefAttributes<"input">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/select.js
interface SelectModifierProps {
  color?: Color;
}
interface SelectProps
  extends ModifierProps,
    SelectModifierProps,
    Partial<
      Omit<
        React.ComponentPropsWithoutRef<"select">,
        "size" | "color" | "unselectable"
      >
    > {
  children?: React.ReactNode;
  className?: string;
  style?: {};
  size?: "small" | "medium" | "large";
  readOnly?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  loading?: boolean;
  value?: string | number;
  name?: string;
}
declare const Select: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<SelectProps> & React.RefAttributes<"select">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/textarea.js
interface TextareaModifierProps {
  size?: "small" | "medium" | "large";
  color?: Color;
}
interface TextareaProps
  extends ModifierProps,
    TextareaModifierProps,
    Partial<
      Omit<React.ComponentPropsWithoutRef<"textarea">, "color" | "unselectable">
    > {
  className?: string;
  style?: {};
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  rows?: number;
  value?: string;
  name?: string;
}
declare const Textarea: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<TextareaProps> & React.RefAttributes<"textarea">
>;

/*** Heading ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/heading/heading.js
interface HeadingModifierProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: "light" | "normal" | "semibold" | "bold";
  subtitle?: boolean;
  heading?: boolean;
  spaced?: boolean;
}
interface HeadingProps extends ElementProps, HeadingModifierProps {
  children?: React.ReactNode;
}
declare const Heading: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<HeadingProps> & React.RefAttributes<any>
>;

/*** Hero ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/hero/hero.js
interface HeroModifierProps {
  color?: Color;
  gradient?: boolean;
  size?: "small" | "medium" | "large" | "fullheight";
}
interface HeroProps extends Omit<ElementProps, "color">, HeroModifierProps {
  children?: React.ReactNode;
  style?: {};
}
interface Hero
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<HeroProps> & React.RefAttributes<any>
  > {
  Body: typeof HeroBody;
  Footer: typeof HeroFooter;
  Head: typeof HeroHead;
}
declare const Hero: Hero;

// https://github.com/couds/react-bulma-components/blob/master/src/components/hero/components/hero-body.js
interface HeroBodyProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
declare const HeroBody: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<HeroBodyProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/hero/components/hero-footer.js
interface HeroFooterProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
declare const HeroFooter: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<HeroFooterProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/hero/components/hero-head.js
interface HeroHeadProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
declare const HeroHead: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<HeroHeadProps> & React.RefAttributes<any>
>;

/*** Icon ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/icon/icon.js
interface IconModifierProps {
  icon?: string;
  size?: "small" | "medium" | "large" | "auto";
  align?: "left" | "right";
  color?: Color;
}
interface IconProps
  extends ModifierProps,
    IconModifierProps,
    Partial<
      Omit<React.ComponentPropsWithoutRef<"span">, "color" | "unselectable">
    > {
  children?: React.ReactNode;
  className?: string;
  style?: {};
  // [key: string]: any; // Footnote [0]
}
declare const Icon: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IconProps> & React.RefAttributes<"span">
>;

/*** Image ***/
type ImageSize =
  | 16
  | 24
  | 32
  | 48
  | 64
  | 96
  | 128
  | "square"
  | "1by1"
  | "4by3"
  | "3by2"
  | "16by9"
  | "2by1"
  | "5by4"
  | "5by3"
  | "3by1"
  | "4by5"
  | "3by4"
  | "2by3"
  | "3by5"
  | "9by16"
  | "1by2"
  | "1by3";

// https://github.com/couds/react-bulma-components/blob/master/src/components/image/image.js
interface ImageModifierProps {
  src?: string;
  alt?: string;
  size?: ImageSize;
  fallback?: string;
}
interface ImageProps
  extends ModifierProps,
    ImageModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"figure">, "unselectable">> {
  className?: string;
  style?: {};
}
declare const Image: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ImageProps> & React.RefAttributes<"figure">
>;

/*** Level ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/level/level.js
interface LevelModifierProps {
  breakpoint?: Breakpoint;
}
interface LevelProps extends ElementProps, LevelModifierProps {
  children?: React.ReactNode;
  style?: {};
}
interface Level
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<LevelProps> & React.RefAttributes<any>
  > {
  Item: typeof LevelItem;
  Side: typeof LevelSide;
}
declare const Level: Level;

// https://github.com/couds/react-bulma-components/blob/master/src/components/level/components/level-item.js
interface LevelItemProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
declare const LevelItem: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<LevelItemProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/level/components/level-side.js
interface LevelSideModifierProps {
  align?: string;
}
interface LevelSideProps extends ElementProps, LevelSideModifierProps {
  children?: React.ReactNode;
  style?: {};
}
declare const LevelSide: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<LevelSideProps> & React.RefAttributes<any>
>;

/*** Loader ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/loader/loader.js
interface LoaderProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
declare const Loader: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<LoaderProps> & React.RefAttributes<any>
>;

/*** Media ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/media/media.js
interface MediaProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
interface Media
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<MediaProps> & React.RefAttributes<any>
  > {
  Content: typeof MediaContent;
  Item: typeof MediaItem;
}
declare const Media: Media;

// https://github.com/couds/react-bulma-components/blob/master/src/components/media/components/media-content.js
interface MediaContentProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
declare const MediaContent: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MediaContentProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/media/components/media-item.js
interface MediaItemProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
declare const MediaItem: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MediaItemProps> & React.RefAttributes<any>
>;

/*** Menu ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/menu/menu.js
type MenuProps = ElementProps;
interface Menu
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<MenuProps> & React.RefAttributes<any>
  > {
  List: typeof MenuList;
}
declare const Menu: Menu;

// https://github.com/couds/react-bulma-components/blob/master/src/components/menu/components/list/list.js
interface MenuListModifierProps {
  title?: string;
}
interface MenuListProps
  extends ModifierProps,
    MenuListModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"ul">, "unselectable">> {
  className?: string;
}
interface MenuList
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<MenuListProps> & React.RefAttributes<"ul">
  > {
  Item: typeof MenuListItem;
}
declare const MenuList: MenuList;

// https://github.com/couds/react-bulma-components/blob/master/src/components/menu/components/list/components/item.js
interface MenuListItemModifierProps {
  active?: boolean;
}
interface MenuListItemProps extends ElementProps, MenuListItemModifierProps {
  children?: string | React.ReactElement<any>;
}
declare const MenuListItem: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MenuListItemProps> & React.RefAttributes<any>
>;

/*** Message ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/message/message.js
interface MessageModifierProps {
  size?: "small" | "medium" | "large";
  color?: Color;
}
interface MessageProps
  extends Omit<ElementProps, "color">,
    MessageModifierProps {
  children?: React.ReactNode;
  style?: {};
}
interface Message
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<MessageProps> & React.RefAttributes<any>
  > {
  Body: typeof MessageBody;
  Header: typeof MessageHeader;
}
declare const Message: Message;

// https://github.com/couds/react-bulma-components/blob/master/src/components/message/components/body.js
interface MessageBodyProps extends ElementProps {
  children?: React.ReactNode;
}
declare const MessageBody: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MessageBodyProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/message/components/header.js
interface MessageHeaderProps extends ElementProps {
  children?: React.ReactNode;
}
declare const MessageHeader: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MessageHeaderProps> & React.RefAttributes<any>
>;

/*** Modal ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/modal.js
interface ModalModifierProps {
  show: boolean;
  onClose: () => void;
  closeOnEsc?: boolean;
  closeOnBlur?: boolean;
  showClose?: boolean;
  document?: {};
}
interface ModalProps extends ModifierProps, ModalModifierProps {
  className?: string;
  children: React.ReactNode;
}
interface Modal
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ModalProps> & React.RefAttributes<"div">
  > {
  Card: typeof ModalCard;
  Content: typeof ModalContent;
}
declare const Modal: Modal;

// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/components/card/card.js
interface ModalCardModifierProps {
  onClose?: () => void;
}
interface ModalCardProps
  extends ModifierProps,
    ModalCardModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"div">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
}
interface ModalCard
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ModalCardProps> & React.RefAttributes<"div">
  > {
  Body: typeof ModalCardBody;
  Foot: typeof ModalCardFoot;
  Head: typeof ModalCardHead;
  Title: typeof ModalCardTitle;
}
declare const ModalCard: ModalCard;

// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/components/card/body.js
interface ModalCardBodyProps extends ElementProps {
  // todo: https://github.com/couds/react-bulma-components/issues/111
  children?: React.ReactNode;
  style?: {};
}
declare const ModalCardBody: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ModalCardBodyProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/components/card/foot.js
interface ModalCardFootProps
  extends ModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"footer">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
}
declare const ModalCardFoot: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ModalCardFootProps> & React.RefAttributes<"footer">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/components/card/head.js
interface ModalCardHeadModifierProps {
  showClose?: boolean;
  onClose?: () => void;
}
interface ModalCardHeadProps
  extends ModifierProps,
    ModalCardHeadModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"header">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
}
declare const ModalCardHead: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ModalCardHeadProps> & React.RefAttributes<"header">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/components/card/title.js
interface ModalCardTitleProps
  extends ModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"p">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
}
declare const ModalCardTitle: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ModalCardTitleProps> & React.RefAttributes<"p">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/components/content.js
interface ModalContentProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
declare const ModalContent: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ModalContentProps> & React.RefAttributes<any>
>;

/*** Navbar ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/navbar.js
interface NavbarModifierProps {
  transparent?: boolean;
  fixed?: "top" | "bottom";
  color?: Color;
  active?: boolean;
}
interface NavbarProps extends Omit<ElementProps, "color">, NavbarModifierProps {
  children?: React.ReactNode;
  style?: {};
}
interface Navbar
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<NavbarProps> & React.RefAttributes<any>
  > {
  Brand: typeof NavbarBrand;
  Burger: typeof NavbarBurger;
  Container: typeof NavbarContainer;
  Divider: typeof NavbarDivider;
  Dropdown: typeof NavbarDropdown;
  Item: typeof NavbarItem;
  Link: typeof NavbarLink;
  Menu: typeof NavbarMenu;
}
declare const Navbar: Navbar;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/brand.js
interface NavbarBrandProps
  extends ModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"div">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
}
declare const NavbarBrand: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<NavbarBrandProps> & React.RefAttributes<"div">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/burger.js
interface NavbarBurgerProps
  extends ModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"div">, "unselectable">> {
  className?: string;
  style?: {};
  onClick?: React.MouseEventHandler<any>;
}
declare const NavbarBurger: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<NavbarBurgerProps> & React.RefAttributes<"div">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/container.js
interface NavbarContainerModifierProps {
  position?: "start" | "end";
}
interface NavbarContainerProps
  extends ElementProps,
    NavbarContainerModifierProps {
  children?: React.ReactNode;
  style?: {};
}
declare const NavbarContainer: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<NavbarContainerProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/divider.js
interface NavbarDividerProps
  extends ModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"div">, "unselectable">> {
  className?: string;
  style?: {};
}
declare const NavbarDivider: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<NavbarDividerProps> & React.RefAttributes<"div">
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/container.js
interface NavbarDropdownModifierProps {
  boxed?: boolean;
  right?: boolean;
}
interface NavbarDropdownProps
  extends ElementProps,
    NavbarDropdownModifierProps {
  children?: React.ReactNode;
  style?: {};
}
declare const NavbarDropdown: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<NavbarDropdownProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/item.js
interface NavbarItemModifierProps {
  active?: boolean;
  dropdown?: boolean;
  dropdownUp?: boolean;
  hoverable?: boolean;
}
interface NavbarItemProps extends ElementProps, NavbarItemModifierProps {
  children?: React.ReactNode;
  style?: {};
}
declare const NavbarItem: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<NavbarItemProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/link.js
interface NavbarLinkProps extends ElementProps {
  children?: React.ReactNode;
  style?: {};
}
declare const NavbarLink: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<NavbarLinkProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/menu.js
interface NavbarMenuProps
  extends ModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"div">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
}
declare const NavbarMenu: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<NavbarMenuProps> & React.RefAttributes<"div">
>;

/*** Notification ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/notification/notification.js
interface NotificationModifierProps {
  color?: Color;
}
interface NotificationProps
  extends Omit<ElementProps, "color">,
    NotificationModifierProps {
  children?: React.ReactNode;
  style?: {};
}
declare const Notification: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<NotificationProps> & React.RefAttributes<any>
>;

/*** Pagination ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/pagination/pagination.js
interface PaginationModifierProps {
  // todo: https://github.com/couds/react-bulma-components/issues/110
  current?: number;
  total?: number;
  delta?: number;
  onChange?: React.ChangeEventHandler<"nav">;
  next?: React.ReactNode;
  previous?: React.ReactNode;
  showPrevNext?: boolean;
  autoHide?: boolean;
}
interface PaginationProps
  extends ModifierProps,
    PaginationModifierProps,
    Partial<
      Omit<React.ComponentPropsWithoutRef<"nav">, "onChange" | "unselectable">
    > {
  className?: string;
}
declare const Pagination: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PaginationProps> & React.RefAttributes<"nav">
>;

/*** Panel ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/panel/panel.js
type PanelProps = ElementProps;
interface Panel
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<PanelProps> & React.RefAttributes<any>
  > {
  Block: typeof PanelBlock;
  Header: typeof PanelHeader;
  Icon: typeof PanelIcon;
  Tabs: typeof PanelTabs;
}
declare const Panel: Panel;

// https://github.com/couds/react-bulma-components/blob/master/src/components/panel/components/block.js
interface PanelBlockModifierProps {
  active?: boolean;
}
type PanelBlockProps = ElementProps & PanelBlockModifierProps;
declare const PanelBlock: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PanelBlockProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/panel/components/header.js
type PanelHeaderProps = ElementProps;
declare const PanelHeader: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PanelHeaderProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/panel/components/icon.js
type PanelIconProps = ElementProps;
declare const PanelIcon: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PanelIconProps> & React.RefAttributes<any>
>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/panel/components/tabs/tabs.js
type PanelTabsProps = ElementProps;
interface PanelTabs
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<PanelTabsProps> & React.RefAttributes<any>
  > {
  Tab: typeof PanelTabsTab;
}
declare const PanelTabs: PanelTabs;

// https://github.com/couds/react-bulma-components/blob/master/src/components/panel/components/tabs/components/tab.js
interface PanelTabsTabModifierProps {
  active?: boolean;
}
type PanelTabsTabProps = ElementProps & PanelTabsTabModifierProps;
declare const PanelTabsTab: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<PanelTabsTabProps> & React.RefAttributes<any>
>;

/*** Progress ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/progress/progress.js
interface ProgressModifierProps {
  color?: Color;
  size?: "small" | "medium" | "large";
  // todo: https://github.com/couds/react-bulma-components/issues/112
  max: number;
  value: number;
}
interface ProgressProps
  extends ModifierProps,
    ProgressModifierProps,
    Partial<
      Omit<
        React.ComponentPropsWithoutRef<"progress">,
        "color" | "max" | "value" | "unselectable"
      >
    > {
  className?: string;
  style?: {};
}
declare const Progress: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ProgressProps> & React.RefAttributes<"progress">
>;

/*** Section ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/section/section.js
interface SectionModifierProps {
  size?: "medium" | "large";
}
interface SectionProps extends ElementProps, SectionModifierProps {
  children?: React.ReactNode;
  style?: {};
}
declare const Section: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<SectionProps> & React.RefAttributes<any>
>;

/*** Table ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/table/table.js
interface TableModifierProps {
  size?: "fullwidth" | "narrow";
  striped?: boolean;
  bordered?: boolean;
}
interface TableProps
  extends ModifierProps,
    TableModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"table">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
}
declare const Table: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<TableProps> & React.RefAttributes<"table">
>;

/*** Tabs ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/tabs/tabs.js
interface TabsModifierProps {
  align?: "centered" | "right";
  size?: "small" | "medium" | "large";
  type?: "toggle" | "boxed" | "toggle-rounded";
  fullwidth?: "boolean";
}
interface TabsProps extends ElementProps, TabsModifierProps {
  children?: React.ReactNode;
  style?: {};
}
interface Tabs
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<TabsProps> & React.RefAttributes<any>
  > {
  Tab: typeof TabsTab;
}
declare const Tabs: Tabs;

// https://github.com/couds/react-bulma-components/blob/master/src/components/tabs/components/tab.js
interface TabsTabModifierProps {
  active?: boolean;
}
interface TabsTabProps extends ElementProps, TabsTabModifierProps {
  children?: React.ReactNode;
  style?: {};
}
declare const TabsTab: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<TabsTabProps> & React.RefAttributes<any>
>;

/*** Tag ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/tag/tag.js
interface TagModifierProps {
  color?: Color;
  size?: "medium" | "large";
  rounded?: boolean;
  remove?: boolean;
}
interface TagProps extends Omit<ElementProps, "color">, TagModifierProps {
  children?: React.ReactNode;
  style?: {};
}
interface Tag
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<TagProps> & React.RefAttributes<any>
  > {
  Group: typeof TagGroup;
}
declare const Tag: Tag;

// https://github.com/couds/react-bulma-components/blob/master/src/components/tag/components/tag-group.js
interface TagGroupModifierProps {
  gapless?: boolean;
}
interface TagGroupProps
  extends ModifierProps,
    TagGroupModifierProps,
    Partial<Omit<React.ComponentPropsWithoutRef<"span">, "unselectable">> {
  children?: React.ReactNode;
  className?: string;
  style?: {};
}
declare const TagGroup: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<TagGroupProps> & React.RefAttributes<"span">
>;

/*** Tile ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/tile/tile.js
interface TileModifierProps {
  kind?: "ancestor" | "parent" | "child";
  vertical?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  color?: Color;
  notification?: boolean;
}
interface TileProps extends Omit<ElementProps, "color">, TileModifierProps {
  children?: React.ReactNode;
  style?: {};
}
declare const Tile: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<TileProps> & React.RefAttributes<any>
>;

export {
  Box,
  Breadcrumb,
  Button,
  Card,
  Columns,
  Container,
  Content,
  Dropdown,
  Element,
  Form,
  Footer,
  Heading,
  Hero,
  Icon,
  Image,
  Level,
  Loader,
  Media,
  Menu,
  Message,
  Modal,
  Navbar,
  Notification,
  Pagination,
  Panel,
  Progress,
  Section,
  Table,
  Tabs,
  Tag,
  Tile
};

export {
  BoxProps,
  BreadcrumbProps,
  ButtonGroupProps,
  ButtonProps,
  CardContentProps,
  CardFooterItemProps,
  CardFooterProps,
  CardHeaderIconProps,
  CardHeaderProps,
  CardHeaderTitleProps,
  CardImageProps,
  CardProps,
  CheckboxProps,
  ColumnProps,
  ColumnsProps,
  ContainerProps,
  ContentProps,
  ControlProps,
  DropdownDividerProps,
  DropdownItemProps,
  DropdownProps,
  FieldBodyProps,
  FieldLabelProps,
  FieldProps,
  FooterProps,
  HeadingProps,
  HelpProps,
  HeroBodyProps,
  HeroFooterProps,
  HeroHeadProps,
  HeroProps,
  IconProps,
  ImageProps,
  InputFileProps,
  InputProps,
  LabelProps,
  LevelItemProps,
  LevelProps,
  LevelSideProps,
  LoaderProps,
  MediaContentProps,
  MediaItemProps,
  MediaProps,
  MenuListItemProps,
  MenuListProps,
  MenuProps,
  MessageBodyProps,
  MessageHeaderProps,
  MessageProps,
  ModalCardBodyProps,
  ModalCardFootProps,
  ModalCardHeadProps,
  ModalCardProps,
  ModalCardTitleProps,
  ModalContentProps,
  ModalProps,
  NavbarBrandProps,
  NavbarBurgerProps,
  NavbarContainerProps,
  NavbarDividerProps,
  NavbarDropdownProps,
  NavbarItemProps,
  NavbarLinkProps,
  NavbarMenuProps,
  NavbarProps,
  NotificationProps,
  PaginationProps,
  PanelBlockProps,
  PanelHeaderProps,
  PanelIconProps,
  PanelProps,
  PanelTabsProps,
  PanelTabsTabProps,
  ProgressProps,
  RadioProps,
  SectionProps,
  SelectProps,
  TableProps,
  TabsProps,
  TabsTabProps,
  TagGroupProps,
  TagProps,
  TextareaProps,
  TileProps
};

// Footnote [0]
// this is horrible but is needed to support `renderAs` with arbitrary components
// the fix for this would be to make (e.g. for Button) Button and ButtonProps generic
// but that won't work unless on TS@next
// This is disabled as it destorys prop type inference and type checking.
