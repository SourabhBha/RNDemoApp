import axios from 'axios';

class AxiosApiClient {
  constructor(baseURL = '') {
    this.client = axios.create({baseURL});
  }

  async get(endpoint) {
    const response = await this.client.get(endpoint);
    return response.data;
  }

  async post(endpoint, data) {
    const response = await this.client.post(endpoint, data);
    return response.data;
  }

  async put(endpoint, data) {
    const response = await this.client.put(endpoint, data);
    return response.data;
  }

  async delete(endpoint) {
    const response = await this.client.delete(endpoint);
    return response.data;
  }
}

export default AxiosApiClient;
