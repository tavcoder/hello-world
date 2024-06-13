'use srict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectsSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: [String]
});

module.exports = mongoose.model('Project', ProjectSchema);
