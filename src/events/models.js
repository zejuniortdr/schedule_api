const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    event_date: Date,
}, { strict: false });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
