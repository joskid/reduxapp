
import { ButtonGroup, Button, Input } from 'react-bootstrap';

class StaticRow extends React.Component {	

	remove(id) {
		this.props.removeRow(id);
	}

	render() {
		const user = this.props.data;
		return (
			<tr key={this.props.key}>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.group ? 'Yes' : 'No'}</td>
				<td>{user.email}</td>
				<td>{user.rating}</td>
				<td>
					<ButtonGroup bsSize='xs'>
						<Button onClick={this.remove.bind(this, user.id)}>Remove</Button>
						<Button onClick={this.props.switchMode}>Edit</Button>
					</ButtonGroup>
				</td>
			</tr>
		)
	}

}

export default StaticRow;