const SnapkiteStreamClient = require('snapkite-stream-client')
const TweetActionCreators = require('../actions/TweetActionCreators')

function initializeStreamOfTweets () {
  SnapkiteStreamClient.initalizeStream(TweetActionCreators.receiveTweet)
}

module.exports = {
  initializeStreamOfTweets: initializeStreamOfTweets
}
