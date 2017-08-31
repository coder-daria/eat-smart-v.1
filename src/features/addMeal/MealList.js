import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import { Field, FieldArray } from 'redux-form';
import R from 'ramda';
import AutoComplete from '../../common/AutoComplete';
import { renderDiv, renderTextField } from '../../common/form/FormFields';
import EditableChip from '../../common/EditableChip';

window.R = R;

class MealList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: this.props.selectedValue || 0
    };
  }

  handleChange = (_e, selectedValue) => {
    this.setState({ selectedValue });
    // this.props.onSelect(selectedValue);
  };

  renderField = (field, index, fields) => {
    const remove = () => fields.remove(index);
    const formFields = (
      <div className="formContentContainer">
        <Field
          name={`${field}.name`}
          component={renderTextField}
          label="Name"
        />

        <Field
          name={`${field}.quantity`}
          component={renderTextField}
          label="Quantity"
        />
      </div>
    );
    const chipFields = (
      <div className="chipContentContainer">
        <div>
          <Field
            name={`${field}.name`}
            component={() => renderDiv(fields.get(index).name)}
          />
        </div>
        <div>
          <div className="quantityContainer">
            <Field
              name={`${field}.quantity`}
              component={() => renderDiv(fields.get(index).quantity)}
            />
            <div>g</div>
          </div>
        </div>
      </div>
    );
    return (
      <li key={index} className="chipItem">
        <EditableChip
          onDelete={remove}
          chipFields={chipFields}
          formFields={formFields}
        />
      </li>
    );
  };

  renderFieldArray = fieldArray => {
    const addField = (name, food) => {
      if (fieldArray.fields.length === 0) {
        fieldArray.fields.push({
          name: food.name,
          id: food.id,
          units: 'grams'
        });
      } else {
        let itEquals = false;
        for (let i = 0; i < fieldArray.fields.length; i++) {
          if (fieldArray.fields.get(i).name === name) {
            itEquals = true;
          }
        }
        if (itEquals === false) {
          return fieldArray.fields.push({
            name: food.name,
            id: food.id,
            units: 'grams'
          });
        }
      }
    };

    return (
      <div className="searchAndChipsContainer">
        <ul>
          {fieldArray.fields.map(this.renderField)}
        </ul>
        <div className="addMealAutocomplete">
          <AutoComplete
            floatingLabelText={'Add a food'}
            items={this.props.foods}
            onSelect={addField}
          />
        </div>
      </div>
    );
  };

  render() {
    const Selectable = makeSelectable(List);
    const listItems = this.props.meals
      ? this.props.meals.map((meal, index) => {
          const nestedItems = [
            <FieldArray
              key={index}
              name={`meals[${index}].foods`}
              component={this.renderFieldArray}
            />
          ];
          return (
            <ListItem
              key={index}
              value={index}
              primaryText={meal.name}
              nestedItems={nestedItems}
            />
          );
        })
      : null;
    return (
      <div>
        {/*<Selectable value={this.state.selectedValue} onChange={this.handleChange}>*/}
        {listItems}
        {/*</Selectable>*/}
      </div>
    );
  }
}

MealList.propTypes = {
  foods: PropTypes.array.isRequired,
  meals: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};
MealList.defaultProps = {};

export default MealList;
