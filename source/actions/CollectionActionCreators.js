const AppDispatcher = require('../dispatcher/AppDispatcher')

function addTweetToCollection (tweet) {
  let action = {
    type: 'add_tweet_to_collection',
    tweet: tweet
  }

  AppDispatcher.dispatch(action)
}

function removeTweetFromCollection (tweetId) {
  let action = {
    type: 'remove_tweet_from_collection',
    tweetId: tweetId
  }

  AppDispatcher.dispatch(action)
}

function removeAllTweetsFromCollection () {
  let action = {
    type: 'remove_all_tweets_from_collection'
  }

  AppDispatcher.dispatch(action)
}

function setCollectionName (collectionName) {
  let action = {
    type: 'set_collection_name',
    collectionName: collectionName
  }

  AppDispatcher.dispatch(action)
}

module.exports = {
  addTweetToCollection: addTweetToCollection,
  removeTweetFromCollection: removeTweetFromCollection,
  removeAllTweetsFromCollection: removeAllTweetsFromCollection,
  setCollectionName: setCollectionName
}
