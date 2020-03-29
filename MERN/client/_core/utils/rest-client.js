async function restClient ({requestUrl, method = 'GET', body, ...rest}) {
  const response = await fetch(requestUrl, {
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

export default restClient;

