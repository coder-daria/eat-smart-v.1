import React from 'react';
import Snackbar from 'material-ui/Snackbar';

class SnackbarMessage extends React.Component {
    state = {
      open: this.props.dataReceived, 
    };
    componentWillReceiveProps = props => {
      this.setState({
        open: props.dataReceived
      })
    }
    handleRequestClose = () => {
    this.props.clearStateDataReceived(false);
  };
  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message="Food has been saved"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default SnackbarMessage;