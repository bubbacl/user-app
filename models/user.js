const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    first_name: {
        type: string,
        required: true
    },
    last_name: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true
    },
    editable: {
        type: boolean,
        required: true
    }
});

module.exports = mongoose('User', UserSchema);
