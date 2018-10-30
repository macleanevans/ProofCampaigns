// src / config / index.js
'use strict'

const config = {
  port: 5001,
  secret: 'super-secret-key',
  databaseUrl: 'mongodb://localhost:27017/Proof_Campaigns',
  saltRounds: 10
}

module.exports = config
