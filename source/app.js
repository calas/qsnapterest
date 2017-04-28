const React = require('react')
const ReactDOM = require('react-dom')
const Application = require('./components/Application.react')
const WebAPIUtils = require('./utils/WebAPIUtils')

WebAPIUtils.initializeStreamOfTweets()

ReactDOM.render(<Application />, document.getElementById('react-application'))
