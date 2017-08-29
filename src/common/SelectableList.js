import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, makeSelectable } from 'material-ui/List';

class SelectableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.initialValue
    };
  }

  handleChange = (_e, selectedValue) => {
    this.setState({ selectedValue });
    this.props.onSelect(selectedValue);
  };

  render() {
    const Selectable = makeSelectable(List);
    const listItems = this.props.items.map((item, index) => {
      return <ListItem key={index} value={item.name} primaryText={item.name} />;
    });
    return (
      <Selectable value={this.state.selectedValue} onChange={this.handleChange}>
        {listItems}
      </Selectable>
    );
  }
}

SelectableList.propTypes = {
  items: PropTypes.array.isRequired,
  initialValue: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};
SelectableList.defaultProps = {};

export default SelectableList;
