const React = require('react')
const Header = require('./Header.react')
const Button = require('./Button.react')
const CollectionRenameForm = require('./CollectionRenameForm.react')
const CollectionExportForm = require('./CollectionExportForm.react')
const CollectionActionCreators = require('../actions/CollectionActionCreators')
const CollectionStore = require('../stores/CollectionStore')

class CollectionControls extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditingName: false
    }

    this.toggleEditCollectionName = this.toggleEditCollectionName.bind(this)
  }

  getHeaderText () {
    let numberOfTweetsInCollection = this.props.numberOfTweetsInCollection
    let text = numberOfTweetsInCollection
    let name = CollectionStore.getCollectionName()

    if (numberOfTweetsInCollection === 1) {
      text = `${text} tweet in your`
    } else {
      text = `${text} tweets in your`
    }
    return (
      <span>
        {text} <strong>{name}</strong> collection
      </span>
    )
  }

  toggleEditCollectionName () {
    this.setState(prevState => {
      return { isEditingName: !prevState.isEditingName }
    })
  }

  removeAllTweetsFromCollection () {
    CollectionActionCreators.removeAllTweetsFromCollection()
  }

  render () {
    if (this.state.isEditingName) {
      return (
        <CollectionRenameForm onCancelCollectionNameChange={this.toggleEditCollectionName} />
      )
    }

    return (
      <div>
        <Header text={this.getHeaderText()} />
        <Button label='Rename collection' handleClick={this.toggleEditCollectionName} />
        <Button label='Empty collection' handleClick={this.onRemoveAllTweetsFromCollection} />
        <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
      </div>
    )
  }
}

module.exports = CollectionControls
