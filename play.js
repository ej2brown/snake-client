const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('data', (data) => { //creates an event
    console.log("SEVER REPLIED:", data)
  })

  return conn;
}

console.log('Connecting ...');
connect();

