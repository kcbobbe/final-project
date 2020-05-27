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
      this.store.findRecord('account', '5ecdd2ffdcee974b9eb11c39' ).then(function(user) {
        // ...after the record has loaded
        user.favorites.push(
          {
            "_id" : x.id,
            "kanji" : x.kanji,
            "kmeaning" : x.kmeaning,
            "kgrade" : x.kgrade,
            "kunyomi_ja" : x.kunyomi_ja,
            "kunyomi" : x.kunyomi,
            "onyomi_ja" : x.onyomi_ja,
            "onyomi" : x.onyomi,
            "examples" : x.examples,
            "kstroke" : x.kstroke
        }
        );

        console.log('user favorites', user.favorites)
        user.save()
      });
      console.log("added To favorites!", x)
      this.toggleAdded()
    }
}
