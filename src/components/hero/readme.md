## Heading Component

A single class to handle WYSIWYG generated content, where only HTML tags are available ([Bulma docs](https://bulma.io/documentation/elements/content/))


### Usage:

- `import Heading from 'react-bulma-components/lib/components/heading'` to only import this components and his css (**Recommended**)
- `import { Heading } from react-bulma-components`

```jsx
<div>
  <Heading>
    Title
  </Heading>
  <Heading subtitle size={6}>
    Subtitle
  </Heading>
</div>
```

### Props

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|renderAs|`string`|no|`div`|the Html or React element you want to use to render this component||
|color|`enum ['primary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'white', 'black', 'link']`|no|`null`||The color of the element using the classes from Bulma|`is-primary`, `is-success`, `is-info`, `is-warning`, `is-danger`, `is-light`, `is-dark`, `is-white`, `is-black`, `is-link`
|gradient|`bool`|no|`false`|**Experimental**: True to use gradient|
|size|`enum [medium, large, fullheight]`|no|`null`|Size of the element using the bulma classes|
