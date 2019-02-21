import { JSDOM } from 'jsdom';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import { InputFile } from '../input-file';

describe('Input file component', () => {
  beforeEach(() => {
    global.window = new JSDOM('<body><div id="app-root"></div></body>').window;
  });
  it('should render', () => {
    const { asFragment } = render(<InputFile onChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onChange with file data', () => {
    const onChange = jest.fn();
    const { getByTestId, getByText } = render(
      <InputFile className="input-file" value="" style={{ width: 400 }} onChange={onChange} />
    );
    fireEvent.change(getByTestId('file-input'), {
      target: {
        files: [
          {
            name: 'dummyValue.something'
          }
        ]
      }
    });
    expect(getByText('dummyValue.something')).toBeInTheDocument();
    expect(onChange).toHaveBeenCalled();
  });

  it('should call onChange without file data', () => {
    const onChange = jest.fn();
    const { getByTestId, container } = render(
      <InputFile className="input-file" value="" style={{ width: 400 }} onChange={onChange} />
    );
    fireEvent.change(getByTestId('file-input'), {
      target: {
        files: []
      }
    });
    expect(container.querySelector('[data-testid="file-name"]')).toBeNull();
    expect(onChange).toHaveBeenCalled();
  });
});
