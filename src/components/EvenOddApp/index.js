// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  cnClickIncrement = () => {
    const randomNumber = this.getRandomNumber()
    console.log(randomNumber)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="text-1">Count is {displayText}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.cnClickIncrement}
          >
            Increment
          </button>
          <p className="text-2">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
