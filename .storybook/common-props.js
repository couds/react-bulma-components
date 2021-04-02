import React, { useState } from 'react';
import { ArgsTable } from '@storybook/addon-docs/blocks';
import { Element, Block, Message, Button } from '../'

const CommonProps = () => {
  const [show, setShow] = useState()
  return (
    <>
      <Block>
        <Message color="info">
          <Message.Body textSize={7}>
            This component also has all the shared props from the <code>Element</code> component {' '}
            <a onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} common props</a>
          </Message.Body>
        </Message>
        {
          show && <ArgsTable of={Element} />
        }
      </Block>
    </>
  )
};

export default CommonProps