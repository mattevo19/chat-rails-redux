//reduce chances of making spelling errors. JavaScript error when wrong
export const GET_MESSAGES = 'GET_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';

//GET request
export function getMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url).then(r => r.json())
  return {
    type: GET_MESSAGES,
    payload: promise
  }
}

//POST request
export function createMessage(channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
  const body = { author: author, content: content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: POST_MESSAGE,
    payload: promise
  }
}