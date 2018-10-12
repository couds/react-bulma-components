import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../../button';
import Buttons from '..';

describe('Buttons component', () => {
  it('Should exist', () => {
    expect(Buttons).toMatchSnapshot();
  });
  it('Should be a a default list of buttons', () => {
    const component = renderer.create(
      <Buttons>
        <Button>
          test
        </Button>
      </Buttons>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat class names in props with Bulma class name', () => {
    const component = renderer.create(
      <Buttons className="super-class-1 dope-class-2">
        <Button>
          test
        </Button>
      </Buttons>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should group buttons together', () => {
    const component = renderer.create(
      <Buttons hasAddons>
        <Button>
          test 1
        </Button>
        <Button>
          test 2
        </Button>
      </Buttons>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be centered', () => {
    const component = renderer.create(
      <Buttons position="centered">
        <Button>
          test
        </Button>
      </Buttons>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should align to the right', () => {
    const component = renderer.create(
      <Buttons position="right">
        <Button>
          test
        </Button>
      </Buttons>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
