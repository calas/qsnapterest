const React = require('react')
const Stream = require('./Stream.react')
const Collection = require('./Collection.react')

class Application extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      collectionTweets: {}
    }

    this.addTweetToCollection = this.addTweetToCollection.bind(this)
    this.removeTweetFromCollection = this.removeTweetFromCollection.bind(this)
    this.removeAllTweetsFromCollection = this.removeAllTweetsFromCollection.bind(this)
  }

  addTweetToCollection (tweet) {
    this.setState(prevState => {
      let collectionTweets = prevState.collectionTweets

      collectionTweets[tweet.id] = tweet

      return { collectionTweets: collectionTweets }
    })
  }

  removeTweetFromCollection (tweet) {
    this.setState(prevState => {
      let collectionTweets = prevState.collectionTweets

      delete collectionTweets[tweet.id]

      return { collectionTweets: collectionTweets }
    })
  }

  removeAllTweetsFromCollection () {
    this.setState(prevState => {
      return { collectionTweets: {} }
    })
  }

  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4 text-center'>
            <Stream onAddTweetToCollection={this.addTweetToCollection} />
          </div>
          <div className='col-md-8'>
            <Collection
              tweets={this.state.collectionTweets}
              onRemoveTweetFromCollection={this.removeTweetFromCollection}
              onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Application
