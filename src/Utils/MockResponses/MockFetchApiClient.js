class MockFetchApiClient {
  constructor() {
    this.users = [];
  }

  async register({firstname, lastname, email, mobile, password}) {
    // Simulate saving user

    const user = {id: Date.now(), firstname, lastname, email, mobile};
    // console.log('MockFetchApiClient register:', user);
    this.users.push({...user, password});
    // Simulate API delay
    return new Promise(resolve =>
      setTimeout(
        () => resolve({success: true, user, token: 'mock-token'}),
        500,
      ),
    );
  }

  async login({email, password}) {
    const found = this.users.find(
      u => u.email === email && u.password === password,
    );
    console.log('MockFetchApiClient login:', found);
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (found) {
          const {password, ...user} = found;
          resolve({success: true, user, token: 'mock-token'});
        } else {
          resolve({success: false, error: 'Invalid credentials'});
        }
      }, 500),
    );
  }
}

export default MockFetchApiClient;
