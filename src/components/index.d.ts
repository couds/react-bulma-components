import * as React from 'react';
import { HTMLAttributes, ModifierProps } from '../modifiers';

type RenderAsComponentProps<
  TComponent
> = TComponent extends keyof JSX.IntrinsicElements
  ? HTMLAttributes<TComponent>
  : TComponent extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : never;

export type OmitKeys<T, U> = Pick<T, Exclude<keyof T, U>>;

export type RenderAsComponent = string | React.ComponentType<never>;

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
