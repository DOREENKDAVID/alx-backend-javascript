export default function handleResponseFromAPI(promise) {
  const p = { status: 200, body: 'success' };
  return promise
    .then(() => p)
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}
