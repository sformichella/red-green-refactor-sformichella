const request = require('superagent');

const fetchQuotes = async () => {
  const { body } = await request.get('http://futuramaapi.herokuapp.com/api/characters/fry');

  const {
    character: name,
    quote: text,
    image
  } = body[0];
  
  return {
    name,
    text,
    image
  }
}

module.exports = {
  fetchQuotes
}