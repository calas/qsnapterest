const React = require('react')
const ReactDOMServer = require('react-dom/server')
const CollectionControls = require('./CollectionControls.react')
const TweetList = require('./TweetList.react')
const Header = require('./Header.react')

class Collection extends React.Component {
  createHtmlMarkupStringOfTweetList () {
    let htmlString = ReactDOMServer
      .renderToStaticMarkup(<TweetList tweets={this.props.tweets} />)

    let htmlMarkup = {
      html: htmlString
    }

    return JSON.stringify(htmlMarkup)
  }

  getListOfTweetIds () {
    return Object.keys(this.props.tweets)
  }

  getNumberOfTweetsInCollection () {
    return this.getListOfTweetIds().length
  }

  render () {
    let numberOfTweetsInCollection = this.getNumberOfTweetsInCollection()

    if (numberOfTweetsInCollection > 0) {
      let tweets = this.props.tweets
      let htmlMarkup = this.createHtmlMarkupStringOfTweetList()
      let removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection
      let handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection

      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup}
            onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}
          />
          <TweetList
            tweets={tweets}
            onRemoveTweetFromCollection={handleRemoveTweetFromCollection}
          />
        </div>
      )
    }

    return <Header text='Your collection is empty' />
  }
}

module.exports = Collection
