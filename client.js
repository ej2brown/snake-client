const net = require('net');
const stdin = process.stdin;
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  stdin.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log("SEVER REPLIED:", data)
  })

  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    // console.log("Name:", name);
    conn.write('Name: liz');
    // setInterval(() => {
    //   conn.write('Move: up')
    //   conn.write('Move: left')
    // }, 50)
  })



  // stdin.on('data', (input) => {
  //   const name = input[0] + input[1] + input[2]
  //   console.log("Name:", name);
  //   conn.write(name) 
  // })

  return conn;
}

module.exports = { connect }
