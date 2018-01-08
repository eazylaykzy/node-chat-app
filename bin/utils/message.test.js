let {generateMessage} = require('./message');

describe('generateMessage', () => {
  test('should generate correct message object', () => {
    let from = 'Andrew';
    let text = 'Hey';
    let message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toEqual(expect.objectContaining({
      from,
      text
    }));
})
});