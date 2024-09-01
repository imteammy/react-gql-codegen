
const fs = require('fs');
const path = require('path');

module.exports.getUsersByID = fs.readFileSync(path.join(__dirname, 'getUsersByID.gql'), 'utf8');
module.exports.users = fs.readFileSync(path.join(__dirname, 'users.gql'), 'utf8');
