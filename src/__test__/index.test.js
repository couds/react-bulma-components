import * as ReactBulmaComponents from '..';

describe('ReactBulmaComponents component', () => {
  it('Should Exports all components', () => {
    expect(ReactBulmaComponents).toMatchSnapshot();
  });
});
