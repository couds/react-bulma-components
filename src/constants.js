export default {
  IS_CLIENT: !!(typeof window !== 'undefined' && window.document && window.document.createElement),
  BREAKPOINTS: {
    NONE: null,
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    MOBILE: 'mobile',
    WIDESCREEN: 'widescreen',
    FULLHD: 'fullhd',
    TOUCH: 'touch'
  },
  COLORS: {
    NONE: null,
    PRIMARY: 'primary',
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warning',
    DANGER: 'danger',
    LIGHT: 'light',
    DARK: 'dark',
    WHITE: 'white',
    BLACK: 'black',
    LINK: 'link'
  },
  SIZES: {
    AUTO: null,
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
  }
};
