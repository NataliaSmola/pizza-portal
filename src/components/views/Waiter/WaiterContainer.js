import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, fetchChangedStatus } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  fetchStatus: (id, newStatus) => dispatch(fetchChangedStatus(id, newStatus)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
