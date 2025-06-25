import axios from 'axios';

class ApiManager {
  constructor() {
    this.client = axios.create({
      baseURL: 'https://reqres.in/api',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * General API request handler
   * @param {string} endpoint - The API endpoint (e.g., '/login')
   * @param {string} method - HTTP method ('GET', 'POST', etc.)
   * @param {object} [data] - Payload for POST/PUT/PATCH requests
   * @param {object} [params] - Query params for GET requests
   * @param {object} [headers] - Optional custom headers
   * @returns {Promise} - Axios response data
   */
  async request({
    endpoint,
    method = 'GET',
    data = {},
    params = {},
    headers = {},
  }) {
    try {
      const response = await this.client.request({
        url: endpoint,
        method,
        data,
        params,
        headers,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error.response ? error.response.data : error;
    }
  }
}

const apiManager = new ApiManager();
export default apiManager;
