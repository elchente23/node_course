console.log('Starting app');

const fs = require('fs'),
      os = require('os');

let user = os.userInfo();

fs.appendFileSync('greetings.txt', `Hello ${user.username}`);
