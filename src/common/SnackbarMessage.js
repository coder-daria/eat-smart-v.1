import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';

class SnackbarMessage extends React.Component {
  render() {
    return (
      <div>
        <Snackbar
          open={this.props.isOpen}
          message={this.props.snackbarMessage}
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
