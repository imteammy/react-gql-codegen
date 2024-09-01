
const fs = require('fs');
const path = require('path');

module.exports.createUser = fs.readFileSync(path.join(__dirname, 'createUser.gql'), 'utf8');
