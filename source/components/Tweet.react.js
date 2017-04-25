const React = require('react')

class Tweet extends React.Component {
  render () {
    let tweet = this.props.tweet

    let images = tweet.media.map((media, idx) => {
      return (
        <li key='li img-{idx}'>
          <img className='img img-responsive' key='img-{idx}' src={media.url} />
        </li>
      )
    })

    return (
      <div className='panel panel-default tweet'>
        <div className='panel-heading'>
          <h3 className='panel-title'>{ tweet.text }</h3>
        </div>
        <div className='panel-body'>
          <ul className='list-unstyled'>
            { images }
          </ul>
        </div>
        <div className='panel-footer'>
          Media Array length: { tweet.media.length }
        </div>
      </div>
    )
  }
}

module.exports = Tweet
