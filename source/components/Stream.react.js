const React = require('react')
const SnapkiteStreamClient = require('snapkite-stream-client')
const StreamTweet = require('./StreamTweet.react')
const Header = require('./Header.react')

class Stream extends React.Component {
  constructor (props) {
    super(props)
    this.state = { tweet: null }
    this.handleNewTweet = this.handleNewTweet.bind(this)
  }

  componentDidMount () {
    SnapkiteStreamClient.initializeStream(this.handleNewTweet)
  }

  componentWillUnmount () {
    SnapkiteStreamClient.destroyStream()
  }

  handleNewTweet (tweet) {
    this.setState({ tweet: tweet })
  }

  render () {
    let tweet = this.state.tweet

    if (tweet) {
      return (
        <StreamTweet
          tweet={tweet}
          onAddTweetToCollection={this.props.onAddTweetToCollection} />
      )
    }

    return (
      <Header text='Waiting for public photos from Twitter...' />
    )
  }
}

module.exports = Stream
