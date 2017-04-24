const React = require('react')
const ReactDOM = require('react-dom')

const ReactClass = React.createClass({
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
    let headerElement = <h1 className='header' key='header'>{ this.state.title }</h1>
    let buttonElement = (
      <button className='btn btn-default' onClick={this.handleClick} key='button'>
        Toggle header
      </button>
    )

    let fragment = [ buttonElement ]

    if (!this.state.isHeaderHidden) {
      fragment.push(headerElement)
    }

    return <div className='container'>{ fragment }</div>
  }
})

const reactComponentElement = React.createElement(ReactClass)

ReactDOM.render(reactComponentElement,
  document.getElementById('react-application'))
