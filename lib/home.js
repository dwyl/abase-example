module.exports = [{
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    return reply('<h1>abase example</h1>');
  }
}];
