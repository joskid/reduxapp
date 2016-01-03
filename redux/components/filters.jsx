
import { Input, Well } from 'react-bootstrap';
import Search from './search';
import { setRatingFilter, setGroupFilter, setSearchQuery } from 'core/actions';

class Filters extends React.Component {

	handleFilterChange({ target }) {
		const id = target.getAttribute('id'),
			  filter = target.value;

		let action = null;

		switch(id) {
			case 'rating-filter':
				action = setRatingFilter(filter);
				break;
			case 'group-filter':
				action = setGroupFilter(filter);
				break;
		}

		this.context.store.dispatch(action);
	}

	handleSearch(query) {
		const action = setSearchQuery(query);
		this.context.store.dispatch(action);
	}

	render() {
		return (
			<div className='filters'>
				<Well bsSize='small'>
					<div className='row'>
						<div className='col-md-3'>
							<Input bsSize='small' label='By rating' type='select' id='rating-filter' onChange={this.handleFilterChange.bind(this)}>
								<option value='-'>-</option>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
							</Input>
						</div>
						<div className='col-md-3'>
							<Input bsSize='small' label='By group' type='select' id='group-filter' onChange={this.handleFilterChange.bind(this)}>
								<option value='-'>-</option>
								<option value='yes'>Yes</option>
								<option value='no'>No</option>
							</Input>
						</div>
						<div className='col-md-4 col-md-offset-2'>
							<Search onChange={this.handleSearch.bind(this)}/>
						</div>
					</div>
				</Well>
			</div>
		)
	}

}

Filters.contextTypes = {
	store: React.PropTypes.object
}

export default Filters;