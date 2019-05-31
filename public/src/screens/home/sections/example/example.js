import React, { useState } from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';
import Box from 'react-bulma-components/lib/components/box';
import { Input, Label, Field, Control } from 'react-bulma-components/lib/components/form';
import CodeExample from 'components/code-example';
import { Trans } from '@lingui/macro';


const exampleCode = {
  reactCode: `
const Element = () => {
  const [form, setForm] = useState({ name: '', password: '' });
  const update = (({ target }) => setForm({ ...form, [target.name]: target.value }))
  return (
    <>
      <Field>
        <Control>
          <Label>Name</Label>
          <Input name="name" value={form.name} onChange={update} />
        </Control>
      </Field>
      <Field>
        <Control>
          <Label>Password</Label>
          <Input name="password" type="password" value={form.password} onChange={update} />
        </Control>
      </Field>
      <Button.Group>
        <Button fullwidth rounded color="primary" onClick={() => console.log(form)}>Login</Button>
      </Button.Group>
    </>
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
  const update = (({ target }) => setForm({ ...form, [target.name]: target.value }))
  return (
    <Section style={{ paddingTop: 0 }}>
      <Heading>
        <Trans id="easy to use">Easy to use</Trans>
      </Heading>
      <Heading subtitle>
        <Trans id="easy to use description">Just import it and use it</Trans>
      </Heading>
      <Box paddingless style={{ marginTop: '2rem' }}>
        <CodeExample {...exampleCode} codeMaxHeight={250} >
          <div style={{ width: '100%', padding: '2rem' }}>
            <Field>
              <Control>
                <Label>Name</Label>
                <Input name="name" value={form.name} onChange={update} />
              </Control>
            </Field>
            <Field>
              <Control>
                <Label>Password</Label>
                <Input name="password" type="password" value={form.password} onChange={update} />
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
