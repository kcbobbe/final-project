import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class KanjiRoute extends Route {
  @service store;
  async model(params) {
    return this.store.findRecord('kanji', params.id);
  }
}

// import Route from '@ember/routing/route';

// export default class KanjiRoute extends Route {
//   async model(params) {
//     let response = await fetch(`/api/kanjis/${params._id}`);
//     let parsed = await response.json();
//     return parsed;
//   }
// }
