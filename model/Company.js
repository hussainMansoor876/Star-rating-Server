const mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose, 1);
const Schema = mongoose.Schema

const SchemaTypes = mongoose.Schema.Types

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ownerId: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
    },
    profilePic: {
        type: Object,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    telnumber:{
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    slugUrl: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'pending'
    },
    title:{
        type: String,
        required: true,
    },
    averageRating: {
        type: String,
        required: false
    },
    user: {
        type: Object,
        required: true
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'review'
    }]
})

const Company = mongoose.model('company', companySchema)

module.exports = Company;