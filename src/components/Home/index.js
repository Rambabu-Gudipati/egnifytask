import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsCalendar} from 'react-icons/bs'

import './index.css'

class Home extends Component {
  state = {
    isActive: false,
  }

  onChange = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const date = new Date()
    const formattedDate = `${date.getDate().toString()}
     ${date.toLocaleString('en-us', {month: 'short'}).toString()}
      ${date.getFullYear().toString()} - 
      
      ${date
        .toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })
        .toString()}`

    const buttonColor = isActive ? 'pinkColor' : 'lightPinkColor'
    return (
      <div className="home-container">
        <div className="inner-container">
          <h1 className="heading">Egnify Grand Test</h1>
          <div className="right-container">
            <BsCalendar size={25} className="icon" />
            <p className="date">
              {formattedDate} to {formattedDate}
            </p>
          </div>
        </div>
        <div className="checkbox-button-container">
          <div>
            <input
              type="checkbox"
              id="checked"
              checked={isActive}
              onChange={this.onChange}
            />
            <label htmlFor="checkbox" className="label-name">
              I accept the instructions
            </label>
          </div>
          <div className="button-container">
            {isActive ? (
              <Link to="/test" className="test-item">
                <button type="button" className={`start-button ${buttonColor}`}>
                  START TEST
                </button>
              </Link>
            ) : (
              <button type="button" className={`start-button ${buttonColor}`}>
                START TEST
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Home
