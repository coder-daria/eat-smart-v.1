import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Loading extends React.Component {
  render() {
    let loading = this.props.isLoading
      ? <CircularProgress size={60} thickness={7} />
      : null;
    return (
      <div>
        {loading}
      </div>
    );
  }
}

export default Loading;
