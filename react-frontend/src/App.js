import './App.css'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import MajorPage from './pages/MajorPage'
import TestPage from './pages/TestPage'
import LandingPage from './pages/LandingPage'
import ListMajorPage from './pages/ListMajorPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop>
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
			</ScrollToTop>
		</BrowserRouter>
	)
}

export default App
