import Component from '@glimmer/component';

export default class FlashcardsFilterComponent extends Component {
  get results() {
    let { kanjis, query } = this.args;

    if (query) {

      console.log(query)
      kanjis = kanjis.filter(kanji => (kanji.kanji.includes(query)
      // || kanji.kmeaning.includes(query)
      || kanji.kunyomi_ja.includes(query)
      || kanji.onyomi_ja.includes(query)
      // || kanji.name.includes(query)
      || kanji.kgrade === (parseInt(query))
      || kanji.kunyomi.includes(query)
      || kanji.onyomi.includes(query)
      ));
    }

    return kanjis;
  }
}
