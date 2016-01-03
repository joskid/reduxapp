
import StaticRow from './table-static-row';
import EditRow from './table-edit-row';

class TableRow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			editMode: false
		}
	}

	switchMode() {
		this.setState({
			editMode: !this.state.editMode
		})
	}

	removeRow(id) {
		this.props.removeUser(id);
	}

	editRow(newData) {
		this.props.editUser(newData);
		this.switchMode();
	}

	render() {
		const props = this.props;
		return !this.state.editMode ? 
			<StaticRow key={props.key} data={props.data} switchMode={this.switchMode.bind(this)} removeRow={this.removeRow.bind(this)}/> : 
			<EditRow key={props.key} data={props.data} editRow={this.editRow.bind(this)}/>
	}

}

export default TableRow;
