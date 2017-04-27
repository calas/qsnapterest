jest.autoMockOff()

describe('Collection utilities module', function () {
  let CollectionUtils = require('../CollectionUtils')
  let collectionTweetsMock = {
    collectionTweet7: {},
    collectionTweet8: {},
    collectionTweet9: {}
  }

  it('returns a number of tweets in collection', function getNumberOfTweetsInCollection () {
    let actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock)
    let expectedNumberOfTweetsInCollection = 3

    expect(actualNumberOfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection)
  })

  it('checks if collection is not empty', function isNotEmptyCollection () {
    let actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(collectionTweetsMock)

    expect(actualIsEmptyCollectionValue).toBeDefined()
    expect(actualIsEmptyCollectionValue).toBe(false)
    expect(actualIsEmptyCollectionValue).not.toBe(true)
  })
})
