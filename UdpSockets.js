
/**
 * @providesModule UdpSockets
 * @flow
 */

var UdpSocket = require('./UdpSocket');
var isFunction = require('lodash.isfunction');

exports.createSocket = function(type, fn) {
  var socket = new UdpSocket({
    type: type
  })

  if (isFunction(fn)) {
    socket.on('message', fn);
  }

  return socket;
}

exports.Socket = UdpSocket;
