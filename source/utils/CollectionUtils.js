function getNumberOfTweetsInCollection (collection) {
  let TweetUtils = require('./TweetUtils')
  let listOfColletionTweetIds = TweetUtils.getListOfTweetIds(collection)
  return listOfColletionTweetIds.length
}

function isEmptyCollection (collection) {
  return (getNumberOfTweetsInCollection(collection) === 0)
}

module.exports = {
  getNumberOfTweetsInCollection: getNumberOfTweetsInCollection,
  isEmptyCollection: isEmptyCollection
}
