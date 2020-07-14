---
id: panel
title: Panel
sidebar_label: Panel
---
import Panel from 'react-bulma-components/lib/components/panel';
import { Control, Input, Checkbox } from 'react-bulma-components/lib/components/form';
import Icon from 'react-bulma-components/lib/components/icon';
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';



---
## **Import**


```js
import Panel from 'react-bulma-components/lib/components/panel';
```
---

---

## **Example**

<Section>
  <Panel>
    <Panel.Header>
      repositories
    </Panel.Header>
    <Panel.Block>
      <Control>
        <Input size="small" type="text" placeholder="search" />
      </Control>
    </Panel.Block>
    <Panel.Tabs className="panel-tabs">
      <Panel.Tabs.Tab active>all</Panel.Tabs.Tab>
      <Panel.Tabs.Tab>public</Panel.Tabs.Tab>
      <Panel.Tabs.Tab>private</Panel.Tabs.Tab>
      <Panel.Tabs.Tab>sources</Panel.Tabs.Tab>
      <Panel.Tabs.Tab>forks</Panel.Tabs.Tab>
    </Panel.Tabs>
    <Panel.Block renderAs="a" active>
      <Panel.Icon renderAs={Icon} icon="angle-down" />
      bulma
    </Panel.Block>
    <Panel.Block>
      <Panel.Icon renderAs={Icon} icon="angle-down" />
      react-bulma-components
    </Panel.Block>
    <Panel.Block>
      <Panel.Icon renderAs={Icon} icon="angle-down" />
      minireset.css
    </Panel.Block>
    <Panel.Block>
      <Panel.Icon renderAs={Icon} icon="angle-down" />
      jgthms.github.io
    </Panel.Block>
    <Panel.Block>
      <Panel.Icon renderAs={Icon} icon="angle-down" />
      couds.gidhub.io
    </Panel.Block>
    <Panel.Block>
      <Panel.Icon renderAs={Icon} icon="angle-down" />
      mojs
    </Panel.Block>
    <Panel.Block renderAs="label" className="panel-block">
      <Checkbox />
      remember me
    </Panel.Block>
    <Panel.Block>
      <Button fullwidth color="link" outlined >
        reset all filters
      </Button>
    </Panel.Block>
  </Panel>
</Section>



```jsx
  <Panel>
    <Panel.Header>
      repositories
    </Panel.Header>
    <Panel.Block>
      <Control>
        <Input size="small" type="text" placeholder="search" />
      </Control>
    </Panel.Block>
    <Panel.Tabs className="panel-tabs">
      <Panel.Tabs.Tab active>all</Panel.Tabs.Tab>
      <Panel.Tabs.Tab>public</Panel.Tabs.Tab>
      <Panel.Tabs.Tab>private</Panel.Tabs.Tab>
      <Panel.Tabs.Tab>sources</Panel.Tabs.Tab>
      <Panel.Tabs.Tab>forks</Panel.Tabs.Tab>
    </Panel.Tabs>
    <Panel.Block renderAs="a" active>
      <Panel.Icon renderAs={Icon} icon="angle-down" />
      bulma
    </Panel.Block>
    <Panel.Block>
      <Panel.Icon renderAs={Icon} icon="angle-down" />
      react-bulma-components
    </Panel.Block>
    <Panel.Block>
      <Panel.Icon renderAs={Icon} icon="angle-down" />
      minireset.css
    </Panel.Block>
    <Panel.Block>
      <Panel.Icon renderAs={Icon} icon="angle-down" />
      jgthms.github.io
    </Panel.Block>
    <Panel.Block>
      <Panel.Icon renderAs={Icon} icon="angle-down" />
      couds.gidhub.io
    </Panel.Block>
    <Panel.Block>
      <Panel.Icon renderAs={Icon} icon="angle-down" />
      mojs
    </Panel.Block>
    <Panel.Block renderAs="label" className="panel-block">
      <Checkbox />
      remember me
    </Panel.Block>
    <Panel.Block>
      <Button fullwidth color="link" outlined >
        reset all filters
      </Button>
    </Panel.Block>
  </Panel>
```
---

## Official documentation

https://bulma.io/documentation/components/panel

