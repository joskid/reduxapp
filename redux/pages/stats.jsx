
import React from 'react';

import Table from 'components/table';
import Form from 'components/form';
import Filters from 'components/filters';

class Stats extends React.Component {

	constructor(props) {
		super(props);
		this.tableHeads = [
			{ field: '', text: 'ID' },
			{ field: 'name', text: 'Name' },
			{ field: '', text: 'Group' },
			{ field: '', text: 'Email' },
			{ field: 'rating', text: 'Rating' },
			{ field: '', text: 'Actions' }
		]
	}

	// TODO: use connect method
	componentDidMount() {
		this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}
	// ------------------------

	render() {
		
		return (
			<div className="row">
				<h1>Stats page</h1>
				<hr/>
				<div className="col-md-8">
					<Filters />
					<Table heads={this.tableHeads} />
				</div>
				<div className="col-md-4">
					<Form />
				</div>
			</div>
		)
	}

}

Stats.contextTypes = {
	store: React.PropTypes.object
}

export default Stats;
