var twilio = require('twilio'), Hapi;
module.exports = function(hapi) {
Hapi = hapi
return exports;
};
var voteSMS = exports.voteSMS = function(request, reply){
var resp = new twilio.TwimlResponse();
resp.message('Thanks for voting!');
reply(resp.toString()).type('text/xml');
};
