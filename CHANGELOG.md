# Changelog

## 4.0.0

- Bump Bulma version to `0.9.2`
  - Improves TS support
  - `<List />` component is completely removed.
  - New spacing modifiers. They have the same names as their equivalent Bulma class names.
    Refer to the [official documentation](https://bulma.io/documentation/helpers/spacing-helpers/) for more information.
    - Usage: `pt-0` in Bulma is equivalent to `pt={0}` in props. Applies to all spacing modifiers.
  - Added srOnly prop to all components to display only on **screen readers**
  - Add Support to textSize `7`
- Improve responsive helper props (`mobile`, `tablet`, `desktop`, `widescreen`, `fullhd`, `touch`, `untilWidescreen`, `untilFullhd`)
  - `hidden` is now inside `display` prop, `{ hidden: true }` become `{ display: 'hidden' }`
  - Added `invisible` to responsive props
- New Storybook, with more details (and hopefully more helpful)
- Renamed the prop value `centered` to `center` on all components to use the same everywhere

### Breadcrumb
- Removed `items` props in favor of composition with `Breadcrumb.Item`
- Added new component `Breadcrumb.Item`

### Botton.Group
- Deprecated `gapless` to `hasAddons` in `Button.Group`
- Renamed `position` prop to `align`

### Columns
- Remove `gapless` prop
- Add variable `gap` prop
- Add gap to responsive option

### Columns.Column
- Merge common responsive props with `Column` responsive props

### Container
- Removed `fluid` prop in favor to add it as an option of the `breakpoint` prop
- Added `max` prop to allow use `is-max-desktop` and `is-max-widescreen` from bulma

### Dropdown
- Dropdown component now accept an `icon` prop that will accept the the component to render the icon
- Removed deprecated `align` prop in favor of boolean `right` prop

### Form.Control
- Removed size props (did nothing)
- Automatically add has-icon-left/right if an `Icon` with align is on the children

### Footer
- Update default `renderAs` to `footer`

### Form.Field
- Added `size` prop that will be also used on childrens that accept size as a prop `Input`, `InputFile`, `Label`, `Icon`, `Button`...

### Form.Input
- Removed `hovered` and `focused` prop in favor to a `state` props that accept `hover` or `focus` as value

### Form.InputFile
- Removed `centered` and `right` prop in favor to a `align` props that accept `center` or `right` as value

### Form.Label
- Added `size` prop that will be used on components inside the `Field`, like `Input`, `Select`, `Label`...

### Form.Select
- Removed `hovered` and `focused` prop in favor to a `state` props that accept `hover` or `focus` as value

### Form.Textarea
- Removed `hovered` and `focused` prop in favor to a `state` props that accept `hover` or `focus` as value

## Hero.Head
- Renamed to `Hero.Header`

### Icon
- Removed the `icon` prop from the `Icon` component.

### Level
- Update default `renderAs` from `div` to `nav`

### Media.Content
- Removed the whole component, use `Content` component insted

### Media.Item
- Renamed `position` prop to `align`

### Modal
- Renamed `Modal.Card.Head` to `Modal.Card.Header`
- Renamed `Modal.Card.Foot` to `Modal.Card.Footer`
- Close button on the top-right corner will be displayed always if the showClose prop is passed, (Before if the children was a card was not displayed)
- Only need to pass `onClose` prop to `Modal` component, no need to pass if to any `Modal.*` any more

### Navbar.Item
- Removed dropdown prop, it will be added automatically if a Navbar.Dropdown is detected on the childrens.

### Navbar.Container
- Renamed `position` prop to `align`

### Pagination
- Renamed `position` prop to `align`

### Table
- Add `hoverable` prop

### Tile
- Remove `notification` prop. You can use `renderAs={Notification}` if need it
- Remove `color` prop.

## 3.3.0

- Add `CHANGELOG.md`

- Bump Bulma version to `0.8.2`

  - `<Panel />` component now supports `color` prop which is exactly the same as
    other component that supports color, like `<Button />`

  - New modifier: `colorVariant`. Accepts two values: `'light'` and `'dark'`.
    It is equivalent to Bulma's `is-light` and `is-dark` modifier.
  
  - For changelog of Bulma `0.8.2`, see [here](https://github.com/jgthms/bulma/blob/master/CHANGELOG.md#082)
