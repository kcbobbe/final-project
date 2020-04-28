import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// export default class GradeRoute extends Route {
//   @service store;
//   async model(params) {
//     return this.store.find('kgrade', params.kgrade);
//   }
// }

export default class GradeRoute extends Route {
  async model(params) {
    let response = await fetch(`/api/grade/${params.kgrade}`);
    let parsed = await response.json();
    return parsed;
  }
}
