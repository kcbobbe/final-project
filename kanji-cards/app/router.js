import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('profile');
  this.route('cardlist');
  this.route('login');
  this.route('signup');
  this.route('kanji', {path: '/kanji/:id' })
  this.route('grade', {path: '/grade/:kgrade'})
  // this.route('page-not-found', {path: '/*wildcard'});
  this.route('account', {path: '/account/:id'});
});
