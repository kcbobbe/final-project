import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FlashcardsComponent extends Component {
  @tracked query = '';
}
