import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { Image } from '..';

describe('Image component', () => {
  it('should render', () => {
    const { asFragment } = render(<Image src="http://mydomain.com/image" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be square', () => {
    const { asFragment } = render(<Image size="square" src="http://mydomain.com/image" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be rounded', () => {
    const { asFragment } = render(<Image rounded src="http://mydomain.com/image" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be 32x32', () => {
    const { asFragment } = render(<Image size={32} src="http://mydomain.com/image" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have use default image if error encounter', () => {
    const { getByTestId } = render(<Image src="http://mydomain.com/image" fallback="http://mydomain.com/default" />);
    fireEvent.error(getByTestId('image-img'));
    expect(getByTestId('image-img')).toHaveAttribute('src', 'http://mydomain.com/default');
  });

  it('should update src', async () => {
    const getComponent = url => <Image src={url} />;
    const { getByTestId, rerender } = render(getComponent('http://mydomain.com/image'));
    rerender(getComponent('http://mydomain.com/other'));
    expect(getByTestId('image-img')).toHaveAttribute('src', 'http://mydomain.com/other');
  });
});
