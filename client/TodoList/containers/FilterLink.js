import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
  // console.log(`ownProps:${ownProps.filter}` );
  // console.log(state);
  // console.log(`state:${state.visibilityFilter}` );
  // console.log(state.visibility
  // Filter);
  return {
    active: ownProps.filter === state.todoApp.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
