var React = require('react')
var ReactDOM = require('react-dom')

var ReactClass = React.createClass({
  getInitialState: function () {
    return {
      isHeaderHidden: false,
      title: 'Stateful React Component'
    }
  },

  handleClick: function () {
    this.setState({
      isHeaderHidden: !this.state.isHeaderHidden
    })
  },

  render: function () {
    var headerElement = React.createElement(
      'h1',
      { className: 'header', key: 'header' },
      this.state.title
    )

    var buttonElement = React.createElement(
      'button',
      {
        className: 'btn btn-default',
        onClick: this.handleClick,
        key: 'button'
      },
      'Toggle header'
    )

    var fragment = []

    if (this.state.isHeaderHidden) {
      fragment = [ buttonElement ]
    } else {
      fragment = [ buttonElement, headerElement ]
    }

    return React.createElement('div', { className: 'container' }, fragment)
  }
})

var reactComponentElement = React.createElement(ReactClass)

ReactDOM.render(reactComponentElement,
  document.getElementById('react-application'))
