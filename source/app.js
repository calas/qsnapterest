var React = require('react')
var ReactDOM = require('react-dom')

var section = (
  <section className='container'>
    <h1 className='header'>This is React.js</h1>
    <p className='content'>And this is how JSX works.</p>
  </section>
)

ReactDOM.render(section, document.getElementById('react-application'))
