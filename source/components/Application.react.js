const React = require('react')
const Stream = require('./Stream.react')
const Collection = require('./Collection.react')

class Application extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4 text-center'>
            <Stream />
          </div>
          <div className='col-md-8'>
            <Collection />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Application
