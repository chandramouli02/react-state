// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0} // initializing state

  //  components to render..
  clicked = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="count">{count}</span> times
        </h1>
        <p className="message">Click the button to increase the count!</p>
        <button className="button-style" type="button" onClick={this.clicked}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
