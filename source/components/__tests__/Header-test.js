jest.dontMock('../Header.react')

describe('Header component', function () {
  const React = require('react')
  const ReactDOM = require('react-dom')
  const TestUtils = require('react-dom/test-utils')
  const Header = require('../Header.react')

  it('renders provided header text', function rendersProvidedHeader () {
    let header = TestUtils.renderIntoDocument(
      <Header text='Testing...' />
    )

    let actualHeaderText = ReactDOM.findDOMNode(header).textContent

    expect(actualHeaderText).toBe('Testing...')
  })

  it('renders provided header text', function rendersDefaultHeader () {
    let defaultHeader = TestUtils.renderIntoDocument(
      <Header />
    )

    let actualDefaultHeaderText = ReactDOM.findDOMNode(defaultHeader).textContent

    expect(actualDefaultHeaderText).toBe('Default header')
  })
})
