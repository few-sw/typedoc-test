const fetch = require('node-fetch'); // Import the 'node-fetch' library to make API requests.

export class DataProcessor {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async fetchBitcoinCashPrice() {
    try {
      const response = await fetch(this.apiUrl);
      if (response.ok) {
        const data = await response.json();
        return data["bitcoin-cash"].usd;
      } else {
        throw new Error('Failed to fetch data from the API');
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

