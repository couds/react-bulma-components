import React, { useState } from 'react';
import { Form } from '../..';
import Columns from '../columns';
import CONSTANTS from '../../constants';

export const BasicUsage = (args) => {
  const [fileName, setFileName] = useState('');
  const [uploadedFile, setUploadedFile] = useState();

  return (
    <Form.InputFile
      {...args}
      value={uploadedFile}
      filename={fileName}
      onChange={(e) => {
        const file = e.target.files[0];
        setFileName(file.name);
        setUploadedFile(e.target.files);
      }}
    />
  );
};

BasicUsage.argTypes = {
  color: {
    description: 'Color of this InputFile',
    defaultValue: undefined,
    control: {
      type: 'select',
      options: Object.values(CONSTANTS.COLORS),
    },
  },
  size: {
    description: 'The size of this InputFile',
    defaultValue: undefined,
    control: {
      type: 'select',
      options: ['default', 'small', 'medium', 'large'],
    },
  },
  centered: {
    description: 'Whether this InputFile should be centered',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  right: {
    description: 'Whether this InputFile should be right-aligned',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  boxed: {
    description: 'Whether this InputFile should be a box',
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
};

export const RightButton = () => (
  <Form.InputFile right filename="Uploaded file.png" />
);

export const Centered = () => (
  <Form.InputFile centered filename="Uploaded file.png" />
);

export const FullWidth = () => (
  <Form.InputFile fullwidth filename="Uploaded file.png" />
);

export const Boxed = () => (
  <Form.InputFile boxed filename="Uploaded file.png" />
);

export const ColorsAndSizes = () => (
  <Columns vCentered>
    <Columns.Column>
      <Form.InputFile
        size="small"
        color="primary"
        filename="Uploaded file.png"
      />
    </Columns.Column>
    <Columns.Column>
      <Form.InputFile
        size="medium"
        color="success"
        filename="Uploaded file.png"
      />
    </Columns.Column>
    <Columns.Column>
      <Form.InputFile
        boxed
        size="large"
        color="warning"
        filename="Uploaded file.png"
      />
    </Columns.Column>
  </Columns>
);
