import {Component} from 'react'
import Popup from 'reactjs-popup'
import OptionCard from '../OptionCard'

import './index.css'

const questions = [
  {
    id: 1,
    question: 'Who is the chief minister of AndhraPradesh',
  },
  {
    id: 2,
    question: 'Who is the chief minister of AuranchalPradesh',
  },
  {
    id: 3,
    question: 'Who is the chief minister of Jammu and Kashmir',
  },
  {
    id: 4,
    question: 'Who is the chief minister of Punjab',
  },
  {
    id: 5,
    question: 'Who is the chief minister of Himachal Pradesh',
  },
  {
    id: 6,
    question: 'Who is the chief minister of Rajasthan',
  },
  {
    id: 7,
    question: 'Who is the chief minister of Gujarath',
  },
  {
    id: 8,
    question: 'Who is the chief minister of Maharashtra',
  },
  {
    id: 9,
    question: 'Who is the chief minister of Madhya Pradesh',
  },
  {
    id: 10,
    question: 'Who is the chief minister of Orissa',
  },
  {
    id: 11,
    question: 'Who is the chief minister of WestBengal',
  },
  {
    id: 12,
    question: 'Who is the chief minister of TamilNadu',
  },
  {
    id: 13,
    question: 'Who is the chief minister of Telangana',
  },
  {
    id: 14,
    question: 'Who is the chief minister of Kerala',
  },
  {
    id: 15,
    question: 'Who is the chief minister of Goa',
  },
]

const options = [
  {
    id: 1,
    option: 'Option1',
    alphabet: 'A',
  },
  {
    id: 2,
    option: 'Option2',
    alphabet: 'B',
  },
  {
    id: 3,
    option: 'Option3',
    alphabet: 'C',
  },
  {
    id: 4,
    option: 'Option4',
    alphabet: 'D',
  },
]

class Test extends Component {
  state = {
    count: 0,
    optionActive: options[0].id,
    isTimerRunning: false,
    timeElapsedInSeconds: 120,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  /* onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 60})
  } */

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    const {timeElapsedInSeconds} = this.state
    if (timeElapsedInSeconds > 0) {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds - 1,
      }))
    }
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  setActiveOption = id => {
    this.setState({optionActive: id})
  }

  nextQuestion = () => {
    const {count} = this.state
    if (count === questions.length - 1) {
      this.setState({count: questions.length - 1})
    } else {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }))
    }
  }

  previousQuestion = () => {
    const {count} = this.state
    if (count === 0) {
      this.setState({count: 0})
    } else {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    }
  }

  onClickOk = () => {
    const {history} = this.props
    history.replace('/')
  }

  /* <button
                type="button"
                className="stop-button button"
                onClick={this.onStopTimer}
                disabled={isTimerRunning}
              >
                Stop
              </button> */

  render() {
    const {count, optionActive} = this.state
    const query = questions[count].question
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <>
        <div className="main-container">
          <div className="upper-container">
            <h1 className="grand-test">Egnify Grand Test</h1>
            <div className="submit-container">
              <p className="time">{time}</p>

              <Popup
                modal
                trigger={
                  <button type="submit" className="submit">
                    Submit
                  </button>
                }
              >
                <>
                  <div className="popup-container">
                    <p>
                      Your exam was successfully completed. click ok to continue
                    </p>

                    <button
                      type="button"
                      className="trigger-button"
                      onClick={this.onClickOk}
                    >
                      Ok
                    </button>
                  </div>
                </>
                )
              </Popup>
            </div>
          </div>
          <div className="upper-container">
            <div className="middle-container">
              <p className="count">{count + 1}</p>
              <p className="single">Single Answer Type</p>
            </div>
            <div className="middle-container">
              <input type="checkbox" id="review" />
              <label htmlFor="review" className="review">
                Review Later
              </label>
            </div>
          </div>

          <p className="question">{query}?</p>
          <ul className="options-list">
            {options.map(item => (
              <OptionCard
                optionCardDetails={item}
                key={item.id}
                isActive={optionActive === item.id}
                setActiveOption={this.setActiveOption}
              />
            ))}
          </ul>
        </div>
        <div className="buttons-container">
          <button
            type="button"
            className="previous-button"
            onClick={this.previousQuestion}
          >
            Previous
          </button>
          <button
            type="button"
            className="previous-button"
            onClick={this.nextQuestion}
          >
            Next
          </button>
        </div>
      </>
    )
  }
}
export default Test
