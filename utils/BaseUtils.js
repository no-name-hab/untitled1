const mongoose = require("mongoose");

const mod = require('../models/models.js');

const Models = mongoose.model('Models');

export function setUpConnection() {
    mongoose.connect('mongodb://localhost:27017/test');
}

export function modeList() {
    return Models.find();
}

export function creatModels(data) {
    const mode = new Models({
        hero_name: data.hero_name,
        name: data.name,
        superpower: data.superpower,
        biography: data.biography,
    });

    return mode.save();
}

export function deleteModels(id) {
    return Models.findById(id).remove();
}
