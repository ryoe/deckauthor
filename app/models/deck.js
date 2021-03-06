import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  uuid: DS.attr('string'),
  slides: DS.hasMany('slide')
});
