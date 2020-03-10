const net = require('net');
const stdin = process.stdin;
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
  stdin.setEncoding('utf8');

  conn.on('data', (data) => { //creates an event
    console.log("SEVER REPLIED:", data)
  })

  conn.on('connect', () => { //creates an event
    console.log("Successfully connected to game server")
  })

  stdin.on('data', (input) => {
    const snk = input[0] + input[1] + input[2]
    console.log("Name:", snk);
  })

  return conn;
}

module.exports = connect
