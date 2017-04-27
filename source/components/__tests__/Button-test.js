jest.dontMock('../Button.react')

describe('Button component', function () {
  const React = require('react')
  const TestUtils = require('react-dom/test-utils')
  const Button = require('../Button.react')

  it('renders the provided label', function rendersProvidedLabel () {
    const ReactDOM = require('react-dom')

    let button = TestUtils.renderIntoDocument(<Button label='Testing...' />)
    let buttonLabel = ReactDOM.findDOMNode(button).textContent

    expect(buttonLabel).toBe('Testing...')
  })

  it('calls handler function on click', function callsClickHandler () {
    let handleClick = jest.genMockFunction()
    let button = TestUtils.renderIntoDocument(<Button handleClick={handleClick} />)
    let buttonInstance = TestUtils.findRenderedDOMComponentWithTag(button, 'button')

    TestUtils.Simulate.click(buttonInstance)
    expect(handleClick).toBeCalled()

    let numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length
    expect(numberOfCallsMadeIntoMockFunction).toBe(1)
  })
})
