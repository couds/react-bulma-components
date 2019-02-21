import * as Form from '..';

describe('Form component', () => {
  it('should expose all Form elements', () => {
    expect(Form.Checkbox).toBeDefined();
    expect(Form.Control).toBeDefined();
    expect(Form.Field).toBeDefined();
    expect(Form.Help).toBeDefined();
    expect(Form.Input).toBeDefined();
    expect(Form.InputFile).toBeDefined();
    expect(Form.Label).toBeDefined();
    expect(Form.Radio).toBeDefined();
    expect(Form.Select).toBeDefined();
    expect(Form.Switch).toBeDefined();
    expect(Form.Textarea).toBeDefined();
  });
});
