import restClient     from '_core/utils/rest';

export default {
  getAllUsers() {
    return restClient({
      method: 'GET',
      path: '/v1/users'
    });
  }
};
