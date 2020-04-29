// import JSONAPISerializer from '@ember-data/serializer/json-api';

// export default class ApplicationSerializer extends JSONAPISerializer {
// }



// import RESTSerializer from '@ember-data/serializer/rest';
// export default class ApplicationSerializer extends RESTSerializer{

// }
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: '_id'
});
