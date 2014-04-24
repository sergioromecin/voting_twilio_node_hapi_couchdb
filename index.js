var Hapi = require( 'hapi' );
var server = Hapi.createServer( 'localhost', process.env.PORT || 3000);
server.route([{
method: 'GET',
path: '/vote/sms',
handler: function (request, reply) {
reply('hello world');
}
}]);
server.start();

