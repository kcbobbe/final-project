import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

// export default class GradeRoute extends Route {
//   @service store;
//   async model(params) {
//     console.log('params:', params, 'store', this.store)
//     return this.store.findAll('kanji', params.kgrade);
//   }
// }

export default class GradeRoute extends Route {
  @service store;
  async model(params) {
    let that = this.store;
    this.store.query('kanji' , {
      filter: {
        kgrade: params
      }
      }).then(function(filteredKanjis) {
        console.log(filteredKanjis, "filteredKanjis", params.kgrade, "params")
        return that.findAll(filteredKanjis)
      })
  }
}

// export default class GradeRoute extends Route {
//   async model(params) {
//     let response = await fetch(`/api/grade/${params.kgrade}`);
//     let parsed = await response.json();
//     return parsed;
//   }
// }
