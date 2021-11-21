import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './App';
import Search from './components/search/search'
import Header from './components/header/header';
import Favorite from './components/favorite/favorite';
import DetailVideo from './components/detailVideo/detailVideo';

import { Provider } from 'react-redux';
import store from './redux/store';



const routing = (
	<Router>
		<Provider store={store}>
			<React.StrictMode>
				<Header />
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/search" component={Search} />
					<Route path="/favorite" component={Favorite} />
					<Route path="/video/:videoId" component={DetailVideo} />
				</Switch>
			</React.StrictMode>
		</Provider>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

