const React = require('react')
const Header = require('./Header.react')
const Button = require('./Button.react')
const CollectionActionCreators = require('../actions/CollectionActionCreators')
const CollectionStore = require('../stores/CollectionStore')

const inputStyle = {
  marginRight: '5px'
}

class CollectionRenameForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      inputValue: CollectionStore.getCollectionName()
    }

    this.handleInputValueChange = this.handleInputValueChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFormCancel = this.handleFormCancel.bind(this)
  }

  setInputValue (inputValue) {
    this.setState({
      inputValue: inputValue
    })
  }

  handleInputValueChange (event) {
    let inputValue = event.target.value

    this.setInputValue(inputValue)
  }

  handleFormSubmit (event) {
    event.preventDefault()

    let collectionName = this.state.inputValue

    CollectionActionCreators.setCollectionName(collectionName)
    this.props.onCancelCollectionNameChange()
  }

  handleFormCancel (event) {
    event.preventDefault()

    let collectionName = CollectionStore.getCollectionName()

    this.setInputValue(collectionName)
    this.props.onCancelCollectionNameChange()
  }

  componentDidMount () {
    this.refs.collectionName.focus()
  }

  render () {
    return (
      <form className='form-inline' onSubmit={this.handleFormSubmit}>
        <Header text='Collection name:' />
        <div className='form-group'>
          <input className='form-control' style={inputStyle}
            onChange={this.handleInputValueChange}
            value={this.state.inputValue}
            ref='collectionName'
          />
        </div>
        <Button label='Change' handleClick={this.handleFormSubmit} />
        <Button label='Cancel' handleClick={this.handleFormCancel} />
      </form>
    )
  }
}

module.exports = CollectionRenameForm
