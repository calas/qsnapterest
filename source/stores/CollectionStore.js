const AppDispatcher = require('../dispatcher/AppDispatcher')
const EventEmitter = require('events').EventEmitter
const assign = require('object-assign')

const CHANGE_EVENT = 'change'

let collectionTweets = {}
let collectionName = 'new'

function addTweetToCollection (tweet) {
  collectionTweets[tweet.id] = tweet
}

function removeTweetFromCollection (tweetId) {
  delete collectionTweets[tweetId]
}

function removeAllTweetsFromCollection () {
  collectionTweets = {}
}

function setCollectionName (name) {
  collectionName = name
}

function emitChange () {
  CollectionStore.emit(CHANGE_EVENT)
}

const CollectionStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getCollectionTweets: function () {
    return collectionTweets
  },

  getCollectionName: function () {
    return collectionName
  }
})

function handleAction (action) {
  switch (action.type) {
    case 'add_tweet_to_collection':
      addTweetToCollection(action.tweet)
      emitChange()
      break
    case 'remove_tweet_from_collection':
      removeTweetFromCollection(action.tweetId)
      emitChange()
      break
    case 'remove_all_tweets_from_collection':
      removeAllTweetsFromCollection()
      emitChange()
      break
    case 'set_collection_name':
      setCollectionName(action.collectionName)
      emitChange()
      break
    default: // ... do nothing
  }
}

CollectionStore.dispatchToken = AppDispatcher.register(handleAction)

module.exports = CollectionStore
