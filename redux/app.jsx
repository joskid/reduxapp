
import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import Stats from './pages/stats';
import store from './core/store';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<div className="container">
					<div style={{marginTop: '10px'}} className='navbar navbar-default'>
						<div className='navbar-header'>
					      <span className='navbar-brand'>
					        <span>React App</span>
					      </span>
					    </div>
					    <ul className='nav navbar-nav'>
					    	<li><Link to='stats'>Stats</Link></li>
					    </ul>
					</div>
					{this.props.children}
				</div>
			</Provider>
		)
	}

}

const router = (
	<Router>
	    <Route path="/" component={App}>
	      	<Route path="stats" component={Stats} />
	    </Route>
  	</Router>
)

ReactDOM.render(router, document.querySelector('.app'));