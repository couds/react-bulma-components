# Columns

A simple way to build responsive columns
---------


Building a columns layout with Bulma is very simple:

- Add a columns container
- Add as many column elements as you want
- Each column will have an equal width, no matter the number of columns.


Usage:

```javascript
<Columns>
  <Column size="half" > Half  width</Column>
  <Column size={2} > 2/6 width</Column>
  <Column size={4} > 4/6 width</Column>
</Columns>
```

## Columns Props

| Property   |      Type      | Default | Description |
|----------|:-------------:|:------:|:----------|
| className |  `String` | `Empty` |Class of the columns container, ex: ```className="container"``` |
| style |    `Object`   | `{}` | React style object, ex: ```style={{ width: 100 }}``` |
| breakpoint | One of `mobile`, `tablet`, `desktop`, `widescreen`, `fullhd` | `null` |   breakpoint where the inner columns will fill the row, ex: ```breakpoint="tablet"``` for all the screen with width lees than a tablet size each column will will all the width |
| gapless | `Boolean` | `false` | if true the column will not have padding |
| multiline | `Boolean` | `true` | If false all columns will be on the same row |
| centered | `Boolean` | `false` | If the inner columns are narrow and doesn't fill all the row columns will be centered

## Column Props

| Property   |      Type      | Default | Description |
|----------|:-------------:|:------:|:----------|
| className |  `String` | `Empty` |Class of the columns container, ex: ```className="container"``` |
| style |    `Object`   | `{}` | React style object, ex: ```style={{ width: 100 }}``` |
| narrow | `Boolean` or One of `mobile`, `tablet`, `desktop`, `widescreen`, `fullhd` | `false` | If this is set to tru the column width will use the minimun necessary space depending of the column childrens |
| size | One of `2` ... `11`, `three-quarters`, `two-thirds`, `half`, `one-third`, `one-quarter` | `auto` |The screen width can be divided in 12, you can use any number between, also some names as `half` t use the half of the available space |
| mobileSize | One of `2` ... `11`, `three-quarters`, `two-thirds`, `half`, `one-third`, `one-quarter` | `auto` | The same as `size` but apply for mobile screen sizes |
| tabletSize | One of `2` ... `11`, `three-quarters`, `two-thirds`, `half`, `one-third`, `one-quarter` | `auto` | The same as `size` but apply for tablet screen sizes |
| desktopSize | One of `2` ... `11`, `three-quarters`, `two-thirds`, `half`, `one-third`, `one-quarter` | `auto` | The same as `size` but apply for desktop screen sizes |
| widescreenSize | One of `2` ... `11`, `three-quarters`, `two-thirds`, `half`, `one-third`, `one-quarter` | `auto` | The same as `size` but apply for widescreen screen sizes |
| fullhdSize | One of `2` ... `11`, `three-quarters`, `two-thirds`, `half`, `one-third`, `one-quarter` | `auto` | The same as `size` but apply for fullhd screen sizes |
| offset | One of `2` ... `11`, `three-quarters`, `two-thirds`, `half`, `one-third`, `one-quarter` | `auto` | Left margin of this column on column size |
| mobileOffset | One of `2` ... `11`, `three-quarters`, `two-thirds`, `half`, `one-third`, `one-quarter` | `auto` | The same as `offset` but apply for mobile screen sizes |
| tabletOffset | One of `2` ... `11`, `three-quarters`, `two-thirds`, `half`, `one-third`, `one-quarter` | `auto` | The same as `offset` but apply for tablet screen sizes |
| desktopOffset | One of `2` ... `11`, `three-quarters`, `two-thirds`, `half`, `one-third`, `one-quarter` | `auto` | The same as `offset` but apply for desktop screen sizes |
| widescreenOffset | One of `2` ... `11`, `three-quarters`, `two-thirds`, `half`, `one-third`, `one-quarter` | `auto` | The same as `offset` but apply for widescreen screen sizes |
| fullhdOffset | One of `2` ... `11`, `three-quarters`, `two-thirds`, `half`, `one-third`, `one-quarter` | `auto` | The same as `offset` but apply for fullhd screen sizes |