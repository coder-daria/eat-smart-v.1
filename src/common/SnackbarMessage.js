import React from 'react';
import Snackbar from 'material-ui/Snackbar';

class SnackbarMessage extends React.Component {
  state = {
    isOpen: this.props.isOpen,
  };
  componentWillReceiveProps = props => {
    this.setState({
      isOpen: props.isOpen
    })
  };
  render() {
    return (
      <div>
        <Snackbar
          open={this.state.isOpen}
          message="Food has been saved"
          onRequestClose={this.props.handleClose}
        />
      </div>
    );
  }
}

export default SnackbarMessage;