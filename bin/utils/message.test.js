let {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  test('should  generate correct location object', () => {
    let from = 'User';
    let latitude = 3.65752;
    let longitude = 6.54321;
    let url = 'https://www.google.com/maps?q=3.65752,6.54321';
    let message = generateLocationMessage(from, latitude, longitude);

    expect(url).toBeTruthy();
    expect(message).toEqual(expect.objectContaining({from, url}));
    expect(typeof message.createdAt).toBe('number');
  });
});