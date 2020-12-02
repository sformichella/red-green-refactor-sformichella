const { fetchQuotes } = require('./fetch-quotes');
const request = require('superagent');

jest.mock('superagent');

describe('fetchQuotes', () => {
  it('should get a quote in the right format', async() => {

    request.get.mockResolvedValue({
      body: [
        {
          "character": "Fry",
          "quote": "Not everyone turns out like their parents. Look at me: my parents were honest,\nhard-working people.",
          "image": "https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png"
        }
      ]
    });

    const quote = await fetchQuotes();
    const expected = {
      "name": "Fry",
      "text": "Not everyone turns out like their parents. Look at me: my parents were honest,\nhard-working people.",
      "image": "https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png"
    }

    expect(quote).toEqual(expected);
  });
});