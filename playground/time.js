let moment = require('moment');

/*let date = moment();
date.add(1, 'year');
console.log(date.format('MMM do, YYYY'));*/

let createdAt = new Date().getTime();
let date = moment(createdAt);
console.log(date.format('h:mm a'));