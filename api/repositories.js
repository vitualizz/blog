var express = require('express')
var router = express()
var request = require('request')
var github = require('octonode')

const gh = github.client(process.env.GITHUB_ACCESS_TOKEN)
const user = gh.user('vitualizz')

router.get('/', (req, res, next) => {
  user.repos((err, data, headers) => {
    res.send(data)
  })
})

module.exports = router
