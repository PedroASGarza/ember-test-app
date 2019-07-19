import Ember from 'ember';
import get from 'ember-metal/get';
import service from 'ember-service/inject';

export default Ember.Component.extend({
  session: service(),
  email: null,
  password: null,

  actions: {
    validateUser() {
      let email = get(this, 'email');
      let password = get(this, 'password');
      this.set('response', `${email} - ${password}`);
    }
  }
});
