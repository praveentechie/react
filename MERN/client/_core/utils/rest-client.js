const NODE_SERVER_PORT = 4040;

async function restClient ({requestUrl, method = 'GET', body, ...rest}) {
  let completeUrl = buildCompleteUrl(requestUrl);
  const response = await fetch(completeUrl, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body
  });
  let responseResult;
  if (response.ok) {
    let responseJson = await response.json();
    responseResult = (responseJson || {}).data;
  } else {
    responseResult = await Promise.reject(response);
  }
  return responseResult;
}

function buildCompleteUrl(requestUrl) {
  return `http://localhost:${NODE_SERVER_PORT}${requestUrl}`;
}

export default restClient;

