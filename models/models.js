const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const modelSchema = new Schema({
    //  pdf: {},
    hero_name: {type: String, required: true},
    name: {type: String, required: true},
    superpower: {type: String, required: true},
    biography: {type: String, required: true},

});

const Model = mongoose.model("Model", modelSchema);

