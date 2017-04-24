var React = require('react')
var ReactDOM = require('react-dom')

var ReactClass = React.createClass({
  render: function () {
    if (this.props.isHidden) {
      return null
    }

    var header = this.props.tweets.length + ' Latest Tweets'

    return React.createElement('h1', { className: 'header' }, header)
  }
})

var reactComponentElement = React.createElement(ReactClass,
  { tweets: { length: 3 }, isHidden: false }
)

ReactDOM.render(reactComponentElement,
  document.getElementById('react-application'))
