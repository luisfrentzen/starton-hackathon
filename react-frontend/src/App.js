import "./App.css"
import { Route, Switch } from "react-router"
import { BrowserRouter } from "react-router-dom"
import MajorPage from "./pages/MajorPage"
import TestPage from "./pages/TestPage"
import LandingPage from "./pages/LandingPage"
import ListMajorPage from "./pages/ListMajorPage"

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<LandingPage />
				</Route>
				<Route path='/take-test'>
					<TestPage />
				</Route>
				<Route path='/major/:name'>
					<MajorPage />
				</Route>
				<Route path='/majors'>
					<ListMajorPage />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
