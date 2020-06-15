const youtube = 'https://www.googleapis.com/youtube/v3/search'
var express = require('express')
var router = express()
var request = require('request')

router.get('/', (req, res, next) => {
  request({
    uri: youtube,
    qs: {
      part: 'snippet',
      channelId: 'UCJZEIkTAh4uFr8DbShvZYww',
      maxResults: 4,
      order: 'relevance',
      type: 'video',
      key: process.env.YOUTUBE_TOKEN
    }
  }).pipe(res)
})

module.exports = router
