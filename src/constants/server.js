const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://immense-meadow-30790.herokuapp.com/'
  : 'http://localhost:8080';

export default PAYMENT_SERVER_URL;
