import './App.css';
import { Route, Router, Switch } from 'react-router';
import Home from './pages/Home.js'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
