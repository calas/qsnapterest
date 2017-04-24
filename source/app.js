var React = require('react')
var ReactDOM = require('react-dom')

var reactElement = React.createElement('h1',
  { className: 'header', key: 'header' },
  'This is React.js'
)

ReactDOM.render(reactElement, document.getElementById('react-application'))
