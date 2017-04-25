const React = require('react')
const ReactDOM = require('react-dom')
const Header = require('./Header.react')
const Tweet = require('./Tweet.react')

class StreamTweet extends React.Component {
  constructor (props) {
    console.log('[qSnapterest] StreamTweet: 1. Running constructor()')
    super(props)
    this.state = {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    }
  }

  componentWillMount () {
    console.log('[qSnapterest] StreamTweet: 2. Running componentWillMount()')

    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    })

    window.qsnapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    }
  }

  componentDidMount () {
    console.log('[qSnapterest] StreamTweet: 4. Running componentDidMount()')

    let componentDOMRepresentation = ReactDOM.findDOMNode(this)

    window.qsnapterest.headerHTML = componentDOMRepresentation.children[0].outerHTML
    window.qsnapterest.tweetHTML = componentDOMRepresentation.children[1].outerHTML
  }

  componentWillUnmount () {
    console.log('[qSnapterest] StreamTweet: 8. Running componentWillUnmount()')

    delete window.qsnapterest
  }

  render () {
    console.log('[qSnapterest] StreamTweet: 3. Running render()')

    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet tweet={this.props.tweet} onImageClick={this.props.onAddTweetToCollection} />
      </section>
    )
  }
}

module.exports = StreamTweet
