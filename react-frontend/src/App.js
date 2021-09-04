import logo from './logo.svg';
import './App.css';

function App() {
  function test() {
    fetch('/hello',  {method: 'POST'}).then(res => res.json()).then(res => console.log(res))
  }

  return (
    <button onClick={test}>Testing</button>
  );
}

export default App;
