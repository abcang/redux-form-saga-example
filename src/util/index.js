function postLoginMock(url, params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!params.username) {
        return reject({username: 'User does not exist', _error: 'Login failed!'});
      } else if (!params.password) {
        return reject({_error: 'Login failed!'});
      }
      return resolve({data: {message: 'success'}});
    }, Math.random() * 5000);
  });
}

export function login(params) {
  /*
  return axios.post('/login', params).then((res) => {
    return { data: res.data };
  }, (error) => {
    return { error };
  });
  */
  return postLoginMock('/login', params).then((res) => {
    return { data: res.data };
  }, (error) => {
    return { error };
  });
}
