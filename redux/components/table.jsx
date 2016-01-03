
import TableRow from './table-row';
import Str from './sortable-table-row';
import { putUser, deleteUser, fetchUsers, setSortField } from 'core/actions';

const filterData = (data, filters) => {
	let filteredData = data.concat();

	// for each filter type
	Object.keys(filters).forEach(key => {
		filteredData = filteredData.filter(d => {

			// search bar filter
			if(key == 'query') {
				return d.name.toLowerCase().indexOf(filters[key]) !== -1;
			}

			// if none selected return all;
			if(filters[key] == '-') return true;

			return d[key] == filters[key];
		});
	});

	return filteredData;
}

const sortData = (data, field, dir) => {
	return data.sort((v1, v2) => {
		if(v1[field] > v2[field]) return 1*dir;
		if(v1[field] < v2[field]) return -1*dir;
		return 0;
	}) 
}

class Table extends React.Component {

	componentDidMount() {
		this.context.store.dispatch(fetchUsers());
	}

	removeUser(id) {
		this.context.store.dispatch(deleteUser(id));
	}

	editUser(user) {
		this.context.store.dispatch(putUser(user));
	}

	sortRows(direction, field) {
		this.context.store.dispatch(setSortField(direction, field));
	}

	render() {
		const store = this.context.store.getState();

		let data = filterData(store.users.entities, store.filters);
		let { field, direction } = store.sortField;

		if(field) data = sortData(data, field, direction);

		let rows = data.map((rowData, i) => {
			return <TableRow 
						data={rowData} 
						key={i} 
						editUser={this.editUser.bind(this)} 
						removeUser={this.removeUser.bind(this)} />
		});

		if(rows.length == 0)
			rows = <tr><td colSpan="6">No data found</td></tr>

		return (
			<div>
				<table className="table table-hover">
					<thead>
						<Str heads={this.props.heads} sortData={this.sortRows.bind(this)} />
					</thead>
					<tbody>
						{ rows }
					</tbody>
				</table>
			</div>	
		)
	}

}

Table.propTypes = {
	heads: React.PropTypes.array.isRequired
}

Table.contextTypes = {
	store: React.PropTypes.object
}

export default Table;