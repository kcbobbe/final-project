import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DetailedComponent extends Component {
    @service store;
    @tracked notAdded = true;
    @action toggleAdded() {
      this.notAdded = !this.notAdded;
    }
    @action addToFavorites(x) {
      this.store.findRecord('account', '5eac79003d38940c74612217' ).then(function(user) {
        // ...after the record has loaded
        user.favorites.push(x);
        user.save()
      });
      console.log("added To favorites!", x)
      this.toggleAdded()
    }
}
