const profile = require('./profile')

const user = process.argv.slice(2);
user.forEach(profile.get);
