## Button Component

The classic button, in different colors, sizes, and states ([Bulma docs](https://bulma.io/documentation/elements/button/))


### Usage:

- `import Button from 'react-bulma-components/lib/components/button'` to only import this components and his css (**Recommended**)
- `import { Button } from react-bulma-components`

```jsx
<Button>
  TEXT
</Button>
```

### Props

|property|propType|required|default|Bulma equivalent class|description|
|--- |--- |--- |--- |--- |--- |
|children|`node`|no|`null`|||
|style|`object`|no|`{}`|||
|className|`string`|no|||Other classes this component will have|
|href|`string`|no|||Is button is a link the url where this link goes|
|hrefAttr|`string`|no|||if the element is a link different but is not a html anchor the equivalent attibute of the href (ex: For `Link` component from react-router this attribute need to be set to `To`)|
|renderAs|`string` or `ReactElement`|no|`a`||the Html or React element you want to use to render this component|
|color|`enum ['primary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'white', 'black', 'link']`|no|`null`|`['is-primary', 'is-success', 'is-info', 'is-warning', 'is-danger', 'is-light', 'is-dark', 'is-white', 'is-black', 'is-link']`|The color of button using the classes from Bulma|
|size|`enum ['small', 'medium', 'large']`|no|`null`|`['is-small', 'is-medium', 'is-large']`|The size of button using the classes from Bulma|
|state|`enum ['hovered', 'focused', 'active']`|no|`null`|`['is-hovered', 'is-focused', 'is-active']`|The state of button using the classes from Bulma|
|outlined|`bool`|no|`false`|`is-outlined`|Is the button should be outlined|
|inverted|`bool`|no|`false`|`is-inverted`|Is the button should be inverted|
|submit|`bool`|no|`false`||Is the button is a from submit button|
|reset|`bool`|no|`false`||Is the button is a from reset button|
|loading|`bool`|no|`false`|`is-loading`|Is the button should be displayed as loading|
|fullwidth|`bool`|no|`false`|`is-fullwidth`|Is the button should be full width|
|disabled|`bool`|no|`false`|`is-disabled`|Is the button should be disabled|
|remove|`bool`|no|`false`|`is-remove`|Is the button should be a remove button|
|isStatic|`bool`|no|`false`|`is-static`|Is the button should be an static element (`span`)|
