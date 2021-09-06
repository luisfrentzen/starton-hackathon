import "./App.css"
import { Route, Switch } from "react-router"
import { BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Major from "./pages/Major"

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/major/:name'>
					<Major />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
