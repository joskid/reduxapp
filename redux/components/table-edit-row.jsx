
import { Button, Input, ButtonGroup } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class EditRow extends React.Component {

	saveEdit() {
		let result = {};
		['name', 'group', 'email', 'rating'].forEach(refname => {
			let el = ReactDOM.findDOMNode(this.refs[refname]),
				val = el.getAttribute('type') == 'checkbox' ? el.checked : el.value;
			result[refname] = val;
		});
		result.id = this.props.data.id;
		this.props.editRow(result);
	}

	render() {
		const {id, name, email, group, rating} = this.props.data;
		const inputClass = 'form-control input-sm'
		return (
			<tr key={this.props.key} style={{textAlign: 'center'}}>
				<td> <input className={inputClass} type='text' defaultValue={id} readOnly/> </td>
				<td> <input className={inputClass} type='text' ref='name' defaultValue={name} /> </td>
				<td> <input type='checkbox' ref='group' defaultChecked={group}/> </td>
				<td> <input className={inputClass} type='text' ref='email' defaultValue={email} /> </td>
				<td>
					<select className={inputClass} ref='rating' defaultValue={rating}>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
					</select>
				</td>
				<td>
					<ButtonGroup bsSize='xs'>
						<Button onClick={this.saveEdit.bind(this)}>Save</Button>
					</ButtonGroup>
				</td>
			</tr>
		)
	}

}

export default EditRow;
