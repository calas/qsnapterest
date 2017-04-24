var React = require('react')
var ReactDOM = require('react-dom')

var ReactClass = React.createClass({
  render: function () {
    if (this.props.isHidden) {
      return null
    }

    return React.createElement('h1',
      { className: 'header' },
      this.props.header)
  }
})

var reactComponentElement = React.createElement(ReactClass,
  { header: 'React Components', isHidden: false }
)

ReactDOM.render(reactComponentElement,
  document.getElementById('react-application'))
