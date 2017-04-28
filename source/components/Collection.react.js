const React = require('react')
const ReactDOMServer = require('react-dom/server')
const CollectionControls = require('./CollectionControls.react')
const TweetList = require('./TweetList.react')
const Header = require('./Header.react')
const CollectionUtils = require('../utils/CollectionUtils')
const CollectionStore = require('../stores/CollectionStore')

class Collection extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      collectionTweets: CollectionStore.getCollectionTweets()
    }

    this.onCollectionChange = this.onCollectionChange.bind(this)
  }

  componentDidMount () {
    CollectionStore.addChangeListener(this.onCollectionChange)
  }

  componentWillUnmount () {
    CollectionStore.removeChangeListener(this.onCollectionChange)
  }

  onCollectionChange () {
    this.setState({
      collectionTweets: CollectionStore.getCollectionTweets()
    })
  }

  createHtmlMarkupStringOfTweetList () {
    let htmlString = ReactDOMServer.renderToStaticMarkup(<TweetList tweets={this.state.tweets} />)

    let htmlMarkup = {
      html: htmlString
    }

    return JSON.stringify(htmlMarkup)
  }

  render () {
    let collectionTweets = this.state.collectionTweets
    let numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets)
    let htmlMarkup

    if (numberOfTweetsInCollection > 0) {
      htmlMarkup = this.createHtmlMarkupStringOfTweetList()

      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup}
          />
          <TweetList tweets={collectionTweets} />
        </div>
      )
    }

    return <Header text='Your collection is empty' />
  }
}

module.exports = Collection
