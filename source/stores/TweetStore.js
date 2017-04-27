const AppDispatcher = require('../dispatcher/AppDispatcher')
const EventEmitter = require('events').EventEmitter
const assign = require('object-assign')

let tweet = null

function setTweet (receivedTweet) {
  tweet = receivedTweet
}

function emitChange () {
  TweetStore.emit('change')
}

const TweetStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on('change', callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback)
  },

  getTweet: function () {
    return tweet
  }
})

function handleAction (action) {
  if (action.type === 'receive_tweet') {
    setTweet(action.tweet)
    emitChange()
  }
}

TweetStore.dispatchToken = AppDispatcher.register(handleAction)

module.exports = TweetStore
