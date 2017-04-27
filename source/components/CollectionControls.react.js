const React = require('react')
const Header = require('./Header.react')
const Button = require('./Button.react')
const CollectionRenameForm = require('./CollectionRenameForm.react')
const CollectionExportForm = require('./CollectionExportForm.react')

class CollectionControls extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'new',
      isEditingName: false
    }

    this.toggleEditCollectionName = this.toggleEditCollectionName.bind(this)
    this.setCollectionName = this.setCollectionName.bind(this)
  }

  getHeaderText () {
    let numberOfTweetsInCollection = this.props.numberOfTweetsInCollection
    let text = numberOfTweetsInCollection

    if (numberOfTweetsInCollection === 1) {
      text = `${text} tweet in your`
    } else {
      text = `${text} tweets in your`
    }
    return (
      <span>
        {text} <strong>{this.state.name}</strong> collection
      </span>
    )
  }

  toggleEditCollectionName () {
    this.setState(prevState => {
      return { isEditingName: !prevState.isEditingName }
    })
  }

  setCollectionName (name) {
    this.setState({
      name: name,
      isEditingName: false
    })
  }

  render () {
    if (this.state.isEditingName) {
      return (
        <CollectionRenameForm name={this.state.name}
          onChangeCollectionName={this.setCollectionName}
          onCancelCollectionNameChange={this.toggleEditCollectionName}
        />
      )
    }

    return (
      <div>
        <Header text={this.getHeaderText()} />
        <Button label='Rename collection'
          handleClick={this.toggleEditCollectionName} />
        <Button label='Empty collection'
          handleClick={this.props.onRemoveAllTweetsFromCollection} />
        <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
      </div>
    )
  }
}

module.exports = CollectionControls
