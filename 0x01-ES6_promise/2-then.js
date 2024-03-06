export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => 'Got a response from the API');
}

/**
 * the function handles a promise response
 * .then() handles a successful response
 *  .catch() handles a failed response
 *  .finally() handles any response regardless of success or failure
 */
