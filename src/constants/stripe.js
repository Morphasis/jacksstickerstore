const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_DtTXdBxTB1bXZud0mmdDyHel'
  : 'pk_test_DtTXdBxTB1bXZud0mmdDyHel';

export default STRIPE_PUBLISHABLE;
