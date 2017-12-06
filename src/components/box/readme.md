## Box Component

The Box element is simply a container with a shadow, a border, a radius, and some padding ([Bulma docs](https://bulma.io/documentation/elements/box/))
For example, you can include a media object, Level or any other elements.

### Usage:

- `import Box from 'react-bulma-components/lib/components/box'` to only import this components and his css (**Recommended**)
- `import { Box } from react-bulma-components`

```jsx
<Box>
  ...ANY HTML OR JSX...
</Box>
```

### Props

|property|propType|required|default|description|
|---|---|---|---|---|
|children|`node`|no|`null`||
|className|	`string`|	no|||
|style|	`object`|	no|	`{}`||
|renderAs|`string` or `ReactElement`|	no|`div`||