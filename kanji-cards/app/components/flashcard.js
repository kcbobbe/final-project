import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import KanjiModel from '../models/kanji';

export default class FlashcardComponent extends Component {
    @tracked isLearning = true;
    @action toggleLearning() {
      this.isLearning = !this.isLearning;
    }
    @tracked isKanji = true;
    @action toggleLanguage() {
      this.isKanji = !this.isKanji;
    }
}
