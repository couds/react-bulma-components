import React from 'react';
import { render } from 'react-testing-library';
import { Progress } from '..';
import CONSTANTS from '../../../constants';

describe('Progress component', () => {
  it('should exist', () => {
    expect(Progress).toMatchSnapshot();
  });
  it('should have notification classname', () => {
    const { asFragment } = render(<Progress value={30} max={100} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Progress value={30} max={100} className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(<Progress value={30} max={100} style={{ width: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be Large', () => {
    const { container } = render(<Progress value={30} max={100} size="large" />);
    expect(container.firstChild).toHaveClass('is-large');
  });
  Object.values(CONSTANTS.COLORS)
    .filter(c => c)
    .map(color =>
      it(`Should use use color ${color}`, () => {
        const { container } = render(<Progress value={30} max={100} color={color} />);
        expect(container.firstChild).toHaveClass(`is-${color}`);
      })
    );
});
