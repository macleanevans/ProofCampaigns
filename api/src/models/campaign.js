'use strict'

const mongoose = require('mongoose')

// Tweet Collection
let CampaignSchema = new mongoose.Schema({
  description: String,
  name: String,
  imageName: String, 
  rule: Object
})

let Campaign = mongoose.model('campaigns', CampaignSchema, 'campaigns')

module.exports = Campaign;
