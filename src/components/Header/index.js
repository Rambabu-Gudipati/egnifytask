import './index.css'
import {Link, withRouter} from 'react-router-dom'

const Header = () => (
  <ul className="header-container">
    <Link to="/">
      <li>Home</li>
    </Link>
    <Link to="/test">
      <li>Test</li>
    </Link>
  </ul>
)
export default withRouter(Header)
