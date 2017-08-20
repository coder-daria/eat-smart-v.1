import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';

class MaterialIcon extends React.Component {
    render() {
        return (
            <div>
                <IconButton onClick={this.props.onClick}>
                {this.props.children}
                </IconButton>
            </div>
        );
    }
}
export default MaterialIcon;