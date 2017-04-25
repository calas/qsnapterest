const React = require('react')

class Header extends React.Component {
  render () {
    return <h2>{ this.props.text }</h2>
  }
}

module.exports = Header
