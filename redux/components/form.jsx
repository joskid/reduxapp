
import { ButtonToolbar, Button, Input } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { postUser } from 'core/actions';

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			rating: 1,
			group: false
		}
	}

	handleInput(e) {
		const elem = e.target,
			  key = elem.getAttribute('id'),
			  value = elem.value;

		this.setState({ [key]: value });
	}

	handleCheckbox(e) {
		const elem = e.target,
			  key = elem.getAttribute('id'),
			  checked = elem.checked;

		this.setState({ [key]: checked });	  
	}

	submitForm(e) {
		this.context.store.dispatch(postUser(this.state));

		this.setState({
			name: '',
			email: '',
			rating: 1,
			group: false
		});

		e.preventDefault();
	}

	render() {
		let { name, email, group, rating } = this.state;
		return (
			<form>
				<Input
				 	type='text'
				 	label='User name'
				 	id='name'
				 	value={name}
				 	onChange={this.handleInput.bind(this)} />

				<Input
					type='text'
					label='Email'
					id='email'
					value={email}
					onChange={this.handleInput.bind(this)} />

				<Input
					type='checkbox'
					label='Group'
					id='group'
					checked={group}
					onChange={this.handleCheckbox.bind(this)} />

				<Input type='select' label='Rating' id='rating' value={rating} onChange={this.handleInput.bind(this)}>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</Input>

				<ButtonToolbar>
					<Button type='submit' bsStyle='success' onClick={this.submitForm.bind(this)}>Submit</Button>
				</ButtonToolbar>
			</form>
		)
	}

}

Form.contextTypes = {
	store: React.PropTypes.object
}

export default Form;
