import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// export default class GradeRoute extends Route {
//   @service store;
//   async model(params) {
//     console.log('params:', params, 'store', this.store)
//     return this.store.findAll('kanji');
//   }
// }

// export default class GradeRoute extends Route {
//   @service store;
//   async model(params) {
//     // let that = this.store;
//     console.log(params)
//     this.get('store').query('kanji' , {
//       filter: {
//         where: {'kgrade': parseInt(params['kgrade'])}
//       }
//       }).then(function(filteredKanjis) {
//         console.log(filteredKanjis, "filteredKanjis", parseInt(params.kgrade), "params")
//         return filteredKanjis
//       }
//   // }
//     )}}

export default class GradeRoute extends Route {
  async model(params) {
    let response = await fetch(`/api/grade/${params.kgrade}`);
    let parsed = await response.json();
    return parsed;
  }
}
