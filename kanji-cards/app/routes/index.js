import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/kanji');
    let parsed = await response.json();
    return parsed;
  }
}

// import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

// export default class IndexRoute extends Route {
//   @service store;
//   async model() {
//     return this.store.findAll('kanji');
//   }
// }
