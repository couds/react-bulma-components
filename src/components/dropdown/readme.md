## Dropdown Component

An interactive dropdown menu for discoverable content ([Bulma docs](https://bulma.io/documentation/components/dropdown/))


### Usage:

- `import Dropdown from 'react-bulma-components/lib/components/dropdown'` to only import this components and his css (**Recommended**)
- `import { Dropdown } from react-bulma-components`

```jsx
<Dropdown>
  <Dropdown.Item value="item" >
    Dropdown item
  </Dropdown.Item>
  <Dropdown.Item value="other">
    Other Dropdown item
  </Dropdown.Item>
  <Dropdown.Item value="active">
    Active Dropdown item
  </Dropdown.Item>
  <Dropdown.Item value="other 2">
    Other Dropdown item
  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item value="divider">
    With divider
  </Dropdown.Item>
</Dropdown>
```

### Props

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|value|`any`|no|`null`|Currently selected value of the dropdown||
|onChange|`func`|no|`null`|Function that will be called when the selected value change||
|color|`enum ['primary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'white', 'black', 'link']`|no|`null`|The color of dropdown using the classes from Bulma|`is-primary`, `is-success`, `is-info`, `is-warning`, `is-danger`, `is-light`, `is-dark`, `is-white`, `is-black`, `is-link`|
|align|`enum`|no|`null`|Alignment of the Dropdown, by default is Left|`is-left`, `is-right`|
|hoverable|`bool`|no|`false`|True if you want to open the dropdown on mouse hover|`hoverable`|

