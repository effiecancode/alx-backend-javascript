export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

/**
 * the function returns a promise that resolves with success message or
 * rejects with an error message
 */

// test
//  console.log(getFullResponseFromAPI(true));
//  console.log(getFullResponseFromAPI(false));
