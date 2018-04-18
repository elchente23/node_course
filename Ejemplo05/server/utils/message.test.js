const expect = require('expect'),
      {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Jen',
            text = 'Some message',
            message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'John',
            latitude = 43.29384,
            longitude = -34.23243,
            url = `https:www.google.com/maps?q=43.29384,-34.23243`,
            message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,url});
    });
});