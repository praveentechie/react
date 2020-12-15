const NODE_SERVER_PORT = 4040;

function buildCompleteUrl(requestUrl) {
  return `http://localhost:${NODE_SERVER_PORT}${requestUrl}`;
}

async function restClient({
  requestUrl, method = 'GET', body
}) {
  const completeUrl = buildCompleteUrl(requestUrl);
  const response = await fetch(completeUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'X-Request-Id': `${Math.random().toString(36).substring(2, 15)}:ui`
    },
    body
  });
  let responseResult;
  if (response.ok) {
    const responseJson = await response.json();
    responseResult = (responseJson || {}).data;
  } else {
    responseResult = await Promise.reject(response);
  }
  return responseResult;
}

export default restClient;
