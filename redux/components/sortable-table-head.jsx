
class SortableTableHead extends React.Component {

	getChevronClassName() {
		const direction = this.props.direction;
		if(this.props.sortingBy !== this.props.field) return '';

		if(direction == 1) {
			return 'glyphicon glyphicon-chevron-down';
		}
		else if(direction == -1) {
			return 'glyphicon glyphicon-chevron-up';
		}
	}

	render() {
		const style = { cursor: 'pointer', textDecoration: 'underline' };

		let text = null;

		if(this.props.field) {
			text = <span style={style} id={this.props.field}>{this.props.text}</span>
		}
		else {
			text = this.props.text;
		}
		
		return (
			<th>
				{ text }
				<i className={this.getChevronClassName()}></i>
			</th>
		)
	}

}

// SortableTableHead.propTypes = {
// 	field: React.PropTypes.any.isRequired,
// 	sortingBy: React.PropTypes.any.isRequired,
// 	direction: React.PropTypes.any.isRequired
// }

export default SortableTableHead;