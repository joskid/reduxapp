
import Sth from './sortable-table-head';

class SortableTableRow extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sortingBy: null,
			direction: null
		}
	}

	sort({ target }) {
		const direction = this.state.direction;
			
		if(target.tagName.toLowerCase() !== 'span') return;

		let field = target.getAttribute('id');

		if(!direction) {
			this.setState({ 
				direction: 1,
				sortingBy: field
			});
			return this.props.sortData(1, field);
		}
		if(field == this.state.sortingBy) {
			this.setState({ direction: direction * -1 });
			this.props.sortData(direction * -1, field);
		}
		else {
			this.setState({ direction: 1, sortingBy: field });
			this.props.sortData(1, field);
		}
	}

	render() {
		const heads = this.props.heads.map((h, i) => {
			return <Sth 
						key={i}
						field={h.field ? h.field : ''}
						direction={this.state.direction}
						sortingBy={this.state.sortingBy}
						text={h.text}
					/>
		});
		return (
			<tr onClick={this.sort.bind(this)}>
				{ heads }
			</tr>
		)
	}

}

SortableTableRow.propTypes = {
	sortData: React.PropTypes.func.isRequired
}

export default SortableTableRow;
