import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Major from './pages/Major';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Major/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
