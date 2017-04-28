const React = require('react')
const Tweet = require('./Tweet.react')
const CollectionActionCreators = require('../actions/CollectionActionCreators')

const listStyle = {
  padding: '0'
}

const listItemStyle = {
  display: 'inline-block',
  listStyle: 'none'
}

class TweetList extends React.Component {
  constructor (props) {
    super(props)
    this.getTweetElement = this.getTweetElement.bind(this)
  }

  removeTweetFromCollection (tweet) {
    CollectionActionCreators.removeTweetFromCollection(tweet.id)
  }

  getListOfTweetIds () {
    return Object.keys(this.props.tweets)
  }

  getTweetElement (tweetId) {
    let tweet = this.props.tweets[tweetId]
    let handleRemoveTweetFromCollection = this.removeTweetFromCollection

    return (
      <li style={listItemStyle} key={tweet.id}>
        <Tweet tweet={tweet} onImageClick={handleRemoveTweetFromCollection} />
      </li>
    )
  }

  render () {
    let tweetElements = this.getListOfTweetIds().map(this.getTweetElement)
    return (
      <ul style={listStyle}>
        {tweetElements}
      </ul>
    )
  }
}

module.exports = TweetList
