import React from 'react';
import IconButton from 'material-ui/IconButton';

class MaterialIcon extends React.Component {
  iconStylesForSize = size => {
    switch (size) {
      case 'big':
        return {
          width: 48,
          height: 48
        };
      default:
        return {
          width: 20,
          height: 20,
          padding: 5
        };
    }
  };

  stylesForSize = size => {
    switch (size) {
      case 'big':
        return {
          width: 48,
          height: 48
        };
      default:
        return { width: 30, height: 30, padding: 0 };
    }
  };

  render() {
    const iconStyle = this.iconStylesForSize(this.props.size);
    const style = this.stylesForSize(this.props.size);
    return (
      <div>
        <IconButton
          style={style}
          iconStyle={iconStyle}
          {...this.props}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </IconButton>
      </div>
    );
  }
}
export default MaterialIcon;
