import RESTAdapter from '@ember-data/adapter/rest';

export default RESTAdapter.extend({
  namespace: 'api'
  // // can target other hosts, might need to use this as a backup
  // host: 'https://api.example.com'
});
