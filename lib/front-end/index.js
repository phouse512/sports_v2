window.jQuery = window.$ = require('jquery');
window._ = require('lodash');
global.jQuery = require('jquery');
//require('bootstrap');

// var editor = require('./editor'),
//     upload = require('./upload'),
//     compile = require('./compile'),
//     learn = require('./learn'),
//     learnerHome = require('./learnerHome'),
//     add = require('./add'),
//     logger = require('./logger'),
//     collab = require('./collab');
//
// logger('pageview');

var question = require('./question');

// window.PWAP = {
//     editor: editor,
//     upload: upload,
//     compile: compile,
//     learn: learn,
//     learnerHome: learnerHome,
//     add: add,
//     collab: collab
// };

window.sports = {
    question: question,
};