export default function() {
  this.namespace = '/api'

  this.get('/users', function() {
    return {
      data: [{
        identifier: 1,
        username: 'user1',
        password: 'password'
      },
      {
        identifier: 2,
        username: 'user2',
        password: 'password'
      },
      {
        identifier: 3,
        username: 'user3',
        password: 'password'
      }]
    }
  })
}
