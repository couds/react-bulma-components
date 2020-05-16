declare module 'react-bulma-components' {
  import * as React from 'react';

  type PropsWithoutRef<T extends WithDomRef> = Pick<T, 'domRef'>;

  interface WithDomRef {
    domRef: React.RefObject<HTMLElement>;
  }

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

  interface ElementPropTypes
    extends HelperProps,
      ColorProps,
      ResponsiveProps,
      TypographyProps,
      WithDomRef {
    className?: string;
    renderAs?: React.ReactElement;
  }

  /**
   * Below defines all components exported by this library
   */

  /**
   * Box component
   */

  interface BoxProps extends PropsWithoutRef<ElementPropTypes> {}

  const Box: React.FC<BoxProps>;

  /**
   * Breadcrumb component
   */
}
