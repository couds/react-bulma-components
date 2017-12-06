## Form Components

All generic form controls, designed for consistency. ([Bulma docs](https://bulma.io/documentation/form/general/))


### Usage:

- `import { Field, Label, Control, Input, ...} from 'react-bulma-components/lib/components/form'` to only import this components and his css (**Recommended**)

OR

```javascript
  import { Form } from react-bulma-components;
  const { Field, Label, Control, Input, ... } = Form;
```

```jsx
<Field>
  <Label>Name</Label>
  <Control>
    <Input placeholder="Text input" />
  </Control>
</Field>
```

## Components

### Checkbox

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|disabled|`bool`|no|`false`|True if this checkbox is disabled||
|value|`any`|no|`null`|The form value of this checkbox||
|checked|`bool`|no|`false`|True if this checkbox is checked||
|name|`string`|no|`''`|The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)||

### Control

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|renderAs|`string`|no|`div`|the Html or React element you want to use to render this component||
|fullwidth|`bool`|no|`false`|Is the element should be full width|`is-expanded`|
|iconLeft|`bool`|no|`false`|True if this control will have an icon on the left|`has-icon-left`|
|iconRight|`bool`|no|`false`|True if this control will have an icon on the Right|`has-icon-left`|
|loading|`bool`|no|`false`|Is the element inside this control should be displayed as loading|`is-loading`|
|size|`enum ['small', 'medium', 'large']`|no|`null`|The size of this element using the classes from Bulma|`is-small`,`is-medium`,`is-large`,|

### Field

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|renderAs|`string`|no|`div`|the Html or React element you want to use to render this component||
|align|`enum ['centered', 'right']`|no|"null"|Alignment of the breadcrumb, by default is Left|`is-centered`, `is-right`|
|kind|`enum ['addons', 'group']`|no|"null"|Type of field (see Bulma Field)|`has-addons`, `is-grouped`|
|multiline|`bool`|no|"false"|True if is a multiline field|`is-grouped-multiline`|
|horizontal|`bool`|no|"false"|True if you are building a horizontal form|`is-horizontal`|

### Help

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|color|`enum ['primary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'white', 'black', 'link']`|no|`null`|`is-primary`, `is-success`, `is-info`, `is-warning`, `is-danger`, `is-light`, `is-dark`, `is-white`, `is-black`, `is-link`|The color of element using the classes from Bulma|

### Input

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|type|`enum ['text', 'email', 'tel', 'password']`|no|`text`|Input type||
|size|`enum ['small', 'medium', 'large']`|no|`null`|The size of thie element using the classes from Bulma|`is-small`,`is-medium`,`is-large`||
|color|`enum ['primary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'white', 'black', 'link']`|no|`null`|`is-primary`, `is-success`, `is-info`, `is-warning`, `is-danger`, `is-light`, `is-dark`, `is-white`, `is-black`, `is-link`|The color of element using the classes from Bulma|
|readOnly|`bool`|no|`false`|True if this input is read-only||
|isStatic|`bool`|no|`false`|True removes the background, border, shadow, and horizontal padding, while maintaining the vertical spacing so you can easily align the input in any context, like a horizontal form|`is-static`|
|disabled|`bool`|no|`false`|True disable this input||
|placeholder|`string`|no|`''`|The text to be displayed if the input is empty||
|value|`string`|no|`''`|The value of the input field||
|name|`string`|no|`''`|The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)||

### Label

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|htmlFor|`string`|no|"''"|Equivalent to the `for` html label attribute||
|size|`enum ['small', 'medium', 'large']`|no|`null`|The size of thie element using the classes from Bulma|`is-small`,`is-medium`,`is-large`||

### Radio

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|disabled|`bool`|no|`false`|True if this checkbox is disabled||
|value|`any`|no|`null`|The form value of this checkbox||
|checked|`bool`|no|`false`|True if this checkbox is checked||
|name|`string`|no|`''`|The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)||

### Select

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|size|`enum ['small', 'medium', 'large']`|no|`null`|The size of thie element using the classes from Bulma|`is-small`,`is-medium`,`is-large`||
|color|`enum ['primary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'white', 'black', 'link']`|no|`null`|`is-primary`, `is-success`, `is-info`, `is-warning`, `is-danger`, `is-light`, `is-dark`, `is-white`, `is-black`, `is-link`|The color of element using the classes from Bulma|
|readOnly|`bool`|no|`false`|True if this select is read-only||
|disabled|`bool`|no|`false`|True disable this select||
|value|`string`|no|`''`|The value of the select field||
|name|`string`|no|`''`|The name of the select field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)||

### Textarea

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|size|`enum ['small', 'medium', 'large']`|no|`null`|The size of thie element using the classes from Bulma|`is-small`,`is-medium`,`is-large`||
|color|`enum ['primary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'white', 'black', 'link']`|no|`null`|`is-primary`, `is-success`, `is-info`, `is-warning`, `is-danger`, `is-light`, `is-dark`, `is-white`, `is-black`, `is-link`|The color of element using the classes from Bulma|
|readOnly|`bool`|no|`false`|True if this textarea is read-only||
|disabled|`bool`|no|`false`|True disable this textarea||
|placeholder|`string`|no|`''`|The text to be displayed if the textarea is empty||
|value|`string`|no|`''`|The value of the textarea field||
|name|`string`|no|`''`|The name of the textarea field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)||
|rows|`int`|no|`4`|Number of rows of this textarea||