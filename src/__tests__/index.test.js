import * as ReactBulmaComponents from '..';

describe('ReactBulmaComponents component', () => {
  it('should Exports all components', () => {
    expect(ReactBulmaComponents).toMatchSnapshot();
  });
});
