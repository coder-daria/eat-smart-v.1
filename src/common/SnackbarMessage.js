import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';

class SnackbarMessage extends React.Component {
  componentWillReceiveProps = props => {
    this.setState({
      isOpen: props.isOpen
    });
  };
  render() {
    return (
      <div>
        <Snackbar
          open={this.props.isOpen}
          message="Food has been saved"
          onRequestClose={this.props.handleClose}
        />
      </div>
    );
  }
}
SnackbarMessage.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default SnackbarMessage;
