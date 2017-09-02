import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20
};

class AddButton extends React.Component {
  render() {
    return (
      <div>
        <FloatingActionButton
          mini={true}
          style={style}
          onTouchTap={this.props.onTouchTap}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}
export default AddButton;
