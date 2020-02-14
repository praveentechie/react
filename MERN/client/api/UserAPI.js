import restClient     from '../utils/rest';

export default {
  getAllUsers() {
    return restClient({
      method: 'GET',
      path: '/v1/users'
    });
  }

  saveUser(userEntity) {
    return restClient({
      method: 'POST',
      path: '/v1/users',
      entity: userEntity
    });
  }
};
