/* eslint-disable react/prop-types */
import React from 'react';

import { Box, Block, Notification } from '../..';

export const Blocks = ({ withoutBlock }) => {
  return (
    <Box>
      {withoutBlock ? (
        <>
          <div>
            <Notification color="info">Some text</Notification>
          </div>
          <div>
            <Notification color="success">Some more text</Notification>
          </div>
          <div>
            <Notification color="danger">
              All of this are evently spaced
            </Notification>
          </div>
          <div>
            <Notification color="warning">
              This one does not generate extra margin at the bottom
            </Notification>
          </div>
        </>
      ) : (
        <>
          <Block>
            <Notification color="info">Some text</Notification>
          </Block>
          <Block>
            <Notification color="success">Some more text</Notification>
          </Block>
          <Block>
            <Notification color="danger">
              All of this are evently spaced
            </Notification>
          </Block>
          <Block>
            <Notification color="warning">
              This one does not generate extra margin at the bottom
            </Notification>
          </Block>
        </>
      )}
    </Box>
  );
};

Blocks.args = {
  withoutBlock: false,
};
