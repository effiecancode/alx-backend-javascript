export default function handleResponseFromAPI(promise) {
  const object = { status: 200, body: 'success' };
  return promise
    .then(() => object)
    .catch(() => Error())
    .finally(() => { console.log('Got a response from the API'); });
}

/**
 * the function handles a promise response
 * .then() handles a successful response
 *  .catch() handles a failed response
 *  .finally() handles any response regardless of success or failure
 */
