import React from 'react';

class PreferencesGroupName extends React.Component {
  render() {
    return (
      <h2 className={this.props.className}>
        {this.props.name}
      </h2>
    );
  }
}

export default PreferencesGroupName;
