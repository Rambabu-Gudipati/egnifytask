import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Test from './components/Test'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/test" component={Test} />
  </Switch>
)

export default App
