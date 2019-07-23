import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore(data) {
    console.log(data)
  },
  authenticate(options) {
    console.log(options)
  },
  invalidate(data) {
    console.log(data)
  }
});
