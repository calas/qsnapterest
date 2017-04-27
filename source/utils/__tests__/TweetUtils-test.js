jest.dontMock('../TweetUtils')

describe('Tweet utilities module', function () {
  it('returns an array of tweet ids', function () {
    let TweetUtils = require('../TweetUtils')
    let tweetsMock = {
      tweet1: {},
      tweet2: {},
      tweet3: {}
    }
    let expectedListOfTweetIds = ['tweet1', 'tweet2', 'tweet3']
    let actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetsMock)

    expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds)
  })
})
