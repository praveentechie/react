import restClient     from '_core/utils/rest-client';

export default {
  getAllUsers() {
    return restClient({
      method: 'GET',
      requestUrl: 'http://dummy.restapiexample.com/api/v1/employees'
    });
  }
};