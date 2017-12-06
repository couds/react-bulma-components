## Icon Component

The icon element is a container for any type of icon font. Because the icons can take a few seconds to load, and because you want control over the space the icons will take, you can use the icon class as a reliable square container that will prevent the page to "jump" on page load. ([Bulma docs](https://bulma.io/documentation/elements/icon/))

## Note

Bulma React Components comes with 2 icons embed `angle-down` used for dropdowns and `bars` for menus.

### Usage:

- `import Icon from 'react-bulma-components/lib/components/icon'` to only import this components and his css (**Recommended**)
- `import { Icon } from react-bulma-components`

```jsx
<div>
  <Icon>
    <i className="rbc rbc-bars" />
  </Icon>
</div>
```

### Props

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|icon|`string`|no|`''`|Yoy can pass the name of the icon to use one of the build in icons||
|size|`enum [small, medium, large]`|no|`null`|Title Size|`is-small`, `is-medium`, `is-large`|
