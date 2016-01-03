
import { Input } from 'react-bootstrap';

const addon = <i className='glyphicon glyphicon-search'></i>

class Search extends React.Component {

	onChange({ target }) {
		this.props.onChange(target.value);
	}

	render() {
		return (
			<Input 
				bsSize='small'
				type='text'
				label='Search'
				addonAfter={addon}
				onChange={this.onChange.bind(this)} />
		)
	}

}

Search.propTypes = {
	onChange: React.PropTypes.func.isRequired
}

export default Search;