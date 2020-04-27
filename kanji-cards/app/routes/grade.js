import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GradeRoute extends Route {
  @service store;
  async model(params) {
    return this.store.find('kgrade', params.kgrade);
  }
}
