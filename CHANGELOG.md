# Changelog

## 4.0.0

- Bump Bulma version to `0.9.0`

  - `<List />` component is completely removed.
  
  - New spacing modifiers. They have the same names as their equivalent Bulma class names.
    Refer to the [official documentation](https://bulma.io/documentation/helpers/spacing-helpers/) for more information.

    - Usage: `pt-0` in Bulma is equivalent to `pt={0}` in props. Applies to all spacing modifiers.
  
  - `src/index.sass` now imports both `~/bulma/sass/helpers/_all` and `~/bulma/bulma`,
    because `~/bulma/base/_all` is deprecated.
  
  - For changelog of Bulma `0.9.0`, see [here](https://github.com/jgthms/bulma/releases/tag/0.9.0)


## 3.3.0

- Add `CHANGELOG.md`

- Bump Bulma version to `0.8.2`

  - `<Panel />` component now supports `color` prop which is exactly the same as
    other component that supports color, like `<Button />`

  - New modifier: `colorVariant`. Accepts two values: `'light'` and `'dark'`.
    It is equivalent to Bulma's `is-light` and `is-dark` modifier.
  
  - For changelog of Bulma `0.8.2`, see [here](https://github.com/jgthms/bulma/blob/master/CHANGELOG.md#082)
