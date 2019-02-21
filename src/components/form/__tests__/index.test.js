import * as Form from '..';

describe('Form component', () => {
  it('Should expose all Form elements', () => {
    expect(Form).toMatchSnapshot();
  });
});
