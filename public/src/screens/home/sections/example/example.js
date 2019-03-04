import React, { useState } from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import { FormattedMessage, defineMessages } from 'react-intl';
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';
import Box from 'react-bulma-components/lib/components/box';
import { Input, Label, Field, Control } from 'react-bulma-components/lib/components/form';
import CodeExample from 'components/code-example';


const messages = defineMessages({
  easyUse: {
    id: 'easy to use',
    defaultMessage: 'Easy to use'
  },
  easyUseDescription: {
    id: 'easy to use description',
    defaultMessage: 'Just import it and use it'
  },
});

const exampleCode = {
  reactCode: `
const Element = () => {
  const [form, setForm] = useState({ name: '', password: '' });
  return (
    <Field>
      <Control>
        <Label>Name</Label>
        <Input value={form.name} onChange={(evt) => setForm({ ...form, name: evt.target.value })} />
      </Control>
    </Field>
    <Field>
      <Control>
        <Label>Password</Label>
        <Input type="password" value={form.password} onChange={(evt) => setForm({ ...form, password: evt.target.value })} />
      </Control>
    </Field>
    <Button.Group>
      <Button fullwidth rounded color="primary" onClick={() => console.log(form)}>Login</Button>
    </Button.Group>
  );
}`,
bulmaCode: `
<div class="field">
  <div class="control">
    <label class="label">Name</label>
    <input class="input" type="text" placeholder="">
  </div>
</div>
<div class="field">
  <div class="control">
    <label class="label">Password</label>
    <input class="input" type="password" placeholder="">
  </div>
</div>
<div class="buttons">
  <button class="is-primary is-rounded is-fullwidth button" tabindex="0">Login</button>
</div>
`
}

const Example = () => {
  const [form, setForm] = useState({ name: '', password: '' });
  return (
    <Section style={{ paddingTop: 0 }}>
      <Heading>
        <FormattedMessage {...messages.easyUse} />
      </Heading>
      <Heading subtitle>
        <FormattedMessage {...messages.easyUseDescription} />
      </Heading>
      <Box paddingless style={{ marginTop: '2rem' }}>
        <CodeExample {...exampleCode} >
          <div style={{ width: '100%', padding: '2rem' }}>
            <Field>
              <Control>
                <Label>Name</Label>
                <Input value={form.name} onChange={(evt) => setForm({ ...form, name: evt.target.value })} />
              </Control>
            </Field>
            <Field>
              <Control>
                <Label>Password</Label>
                <Input type="password" value={form.password} onChange={(evt) => setForm({ ...form, password: evt.target.value })} />
              </Control>
            </Field>
            <Button.Group>
              <Button fullwidth rounded color="primary" onClick={() => console.log(form)}>Login</Button>
            </Button.Group>
          </div>
        </CodeExample>
      </Box>
    </Section>
  )
};

export default Example;
