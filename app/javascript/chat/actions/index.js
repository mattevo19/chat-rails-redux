//reduce chances of making spelling errors. JavaScript error when wrong
export const GET_MESSAGES = 'GET_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';

const BASE_URL = '/api/v1';

//GET request
export function getMessages(channel) {
  const url = `${BASE_URL}/channels/${channel}/messages`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json())
  return {
    type: GET_MESSAGES,
    payload: promise
  }
}

//POST request
export function createMessage(channel, content) {
  const url = `${BASE_URL}/channels/${channel}/messages`
  const body = { content };
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: POST_MESSAGE,
    payload: promise
  }
}