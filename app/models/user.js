import DS from 'ember-data';

export default DS.Model.extend({
  identifier: DS.attr(),
  username: DS.attr(),
  password: DS.attr()
});
