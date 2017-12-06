## Column Component

A simple way to build responsive columns ([Bulma docs](https://bulma.io/documentation/columns/basics/))


### Usage:

- `import Column from 'react-bulma-components/lib/components/column'` to only import this components and his css (**Recommended**)
- `import { Column } from react-bulma-components`

```jsx
<Columns>
  <Columns.Column>
    <p>
      First Column
    </p>
  </Columns.Column>
  <Columns.Column>
    <p>
      Second Column
    </p>
  </Columns.Column>
  <Columns.Column>
    <p>
      Third Column
    </p>
  </Columns.Column>
  <Columns.Column>
    <p>
      Fourth Column
    </p>
  </Columns.Column>
</Columns>
```

### Props

#### Column

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|children|`node`|no|`null`|||
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|breakpoint|`enum ['desktop', 'tablet', 'mobile', 'widescreen', 'fullhd']`|no|`null`|Breakpoint where columns become stacked.|`is-desktop`, `is-tablet`, `is-mobile`, `is-widescreen`, `is-fullhd`|
|gapless|`bool`|no|`false`|`true` to remove space between columns|`is-gapless`|
|multiline|`bool`|no|`true`|`true` if you want to use more than one line if you add more column elements that would fit in a single row.|`is-multiline`|
|centered|`bool`|no|`false`|`true` you want the columns inside to be horizontaly centered|`is-centered`|

#### Column

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|children|`node`|no|`null`|||
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|size|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|The size of the column. the maximun size of a row is 12|`is-1...is-12`, `is-three-quarters`, `is-two-thirds`, `is-half`, `is-one-third`, `is-one-quarter`|
|offset|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|Create horizontal space around Column elements|`is-offset-1...is-offset-11`, `is-offset-three-quarters`, `is-offset-two-thirds`, `is-offset-half`, `is-offset-one-third`, `is-offset-one-quarter`|
|narrow|`bool`|no|`false`|If you want a column to only take the space it needs, use the narrow modifier. The other column(s) will fill up the remaining space.|
|mobile|`shape`|no|`{ size: null,offset: null,narrow: false }`|Size, Offset and Narrow props for Mobile devices (Up to 768px)|
|tablet|`shape`|no|`{ size: null, offset: null, narrow: false }`|Size, Offset and Narrow props for Tablet devices (Between 769px and 1023px)|
|desktop|`shape`|no|`{ size: null, offset: null, narrow: false }`|Size, Offset and Narrow props for Desktop devices (Between 1024px and 1215px)|
|widescreen|`shape`|no|`{ size: null, offset: null, narrow: false }`|Size, Offset and Narrow props for WideScreen devices (Between 1216px and 1407px)|
|fullhd|`shape`|no|`{ size: null, offset: null, narrow: false }`|Size, Offset and Narrow props for FullHD devices (1408px and above)|
|mobileSize|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|The size of the column on Mobile devices (Up to 768px). the maximun size of a row is 12|`is-1-mobile...is-12-mobile`, `is-three-quarters-mobile`, `is-two-thirds-mobile`, `is-half-mobile`, `is-one-third-mobile`, `is-one-quarter-mobile`|
|tabletSize|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|The size of the column on Tablet devices (Between 769px and 1023px). the maximun size of a row is 12|`is-1-tablet...is-12-tablet`, `is-three-quarters-tablet`, `is-two-thirds-tablet`, `is-half-tablet`, `is-one-third-tablet`, `is-one-quarter-tablet`|
|desktopSize|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|The size of the column on Desktop devices (Between 1024px and 1215px). the maximun size of a row is 12|`is-1-desktop...is-12-desktop`, `is-three-quarters-desktop`, `is-two-thirds-desktop`, `is-half-desktop`, `is-one-third-desktop`, `is-one-quarter-desktop`|
|widescreenSize|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|The size of the column on WideScreen devices (Between 1216px and 1407px). the maximun size of a row is 12|`is-1-widescreen...is-12-widescreen`, `is-three-quarters-widescreen`, `is-two-thirds-widescreen`, `is-half-widescreen`, `is-one-third-widescreen`, `is-one-quarter-widescreen`|
|fullhdSize|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|The size of the column on FullHD devices (1408px and above). the maximun size of a row is 12|`is-1-fullhd...is-12-fullhd`, `is-three-quarters-fullhd`, `is-two-thirds-fullhd`, `is-half-fullhd`, `is-one-third-fullhd`, `is-one-quarter-fullhd`|
|offset|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|Create horizontal space around Column elements|`is-offset-1...is-offset-12`, `is-offset-three-quarters`, `is-offset-two-thirds`, `is-offset-half`, `is-offset-one-third`, `is-offset-one-quarter`|
|mobileOffset|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|Create horizontal space around Column elements on Mobile devices (Up to 768px)|`is-offset-1-mobile...is-offset-12-mobile`, `is-offset-three-quarters-mobile`, `is-offset-two-thirds-mobile`, `is-offset-half-mobile`, `is-offset-one-third-mobile`, `is-offset-one-quarter-mobile`|
|tabletOffset|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|Create horizontal space around Column elements on Tablet devices (Between 769px and 1023px)|`is-offset-1-tablet...is-offset-12-tablet`, `is-offset-three-quarters-tablet`, `is-offset-two-thirds-tablet`, `is-offset-half-tablet`, `is-offset-one-third-tablet`, `is-offset-one-quarter-tablet`|
|desktopOffset|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|Create horizontal space around Column elements on Desktop devices (Between 1024px and 1215px)|`is-offset-1-desktop...is-offset-12-desktop`, `is-offset-three-quarters-desktop`, `is-offset-two-thirds-desktop`, `is-offset-half-desktop`, `is-offset-one-third-desktop`, `is-offset-one-quarter-desktop`|
|widescreenOffset|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|Create horizontal space around Column elements on WideScreen devices (Between 1216px and 1407px)|`is-offset-1-widescreen...is-offset-12-widescreen`, `is-offset-three-quarters-widescreen`, `is-offset-two-thirds-widescreen`, `is-offset-half-widescreen`, `is-offset-one-third-widescreen`, `is-offset-one-quarter-widescreen`|
|fullhdOffset|`enum [1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`null`|Create horizontal space around Column elements on on FullHD devices (1408px and above)|`is-offset-1-fullhd...is-offset-12-fullhd`, `is-offset-three-quarters-fullhd`, `is-offset-two-thirds-fullhd`, `is-offset-half-fullhd`, `is-offset-one-third-fullhd`, `is-offset-one-quarter-fullhd`|
|narrow|`enum  [true, false, 1...12, 'three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter']`|no|`false`|If you want a column to only take the space it needs, use the narrow modifier. The other column(s) will fill up the remaining space.||
