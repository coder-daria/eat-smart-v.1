import { changeLocation } from '../../Actions';
import MenuIcon from './MenuIcon';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    currentPage: state.pagechanges.location
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: location => dispatch(changeLocation(location))
  };
};

const ChangeLocationContainer = withRouter(MenuIcon);

export default connect(mapStateToProps, mapDispatchToProps)(
  ChangeLocationContainer
);
