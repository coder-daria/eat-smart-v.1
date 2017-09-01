import React from 'react';

class PreferencesGroup extends React.Component {
  render() {
    return (
      <h2 className={this.props.className}>
        {this.props.name}
        {this.props.children}
      </h2>
    );
  }
}

export default PreferencesGroup;
