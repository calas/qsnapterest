const React = require('react')
const StreamTweet = require('./StreamTweet.react')
const Header = require('./Header.react')
const TweetStore = require('../stores/TweetStore')

class Stream extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tweet: TweetStore.getTweet()
    }

    this.onTweetChange = this.onTweetChange.bind(this)
  }

  componentDidMount () {
    TweetStore.addChangeListener(this.onTweetChange)
  }

  componentWillUnmount () {
    TweetStore.removeChangeListener(this.onTweetChange)
  }

  onTweetChange () {
    this.setState({
      tweet: TweetStore.getTweet()
    })
  }

  render () {
    let tweet = this.state.tweet

    if (tweet) {
      return <StreamTweet tweet={tweet} />
    }

    return (
      <Header text='Waiting for public photos from Twitter...' />
    )
  }
}

module.exports = Stream
