const React = require('react')
const ReactDOM = require('react-dom')

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHeaderHidden: false
    }
    this.handleClick = this.handleClick.bind(this)
  };

  handleClick (e) {
    this.setState(prevState => {
      return { isHeaderHidden: !prevState.isHeaderHidden }
    })
  };

  render () {
    let title = 'Stateful React Component'
    let headerElement = <h1 className='header' key='header'>{ title }</h1>
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
}

ReactDOM.render(<Header />, document.getElementById('react-application'))
