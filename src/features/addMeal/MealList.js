import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import { Field, FieldArray } from 'redux-form';
import R from 'ramda';
import AutoComplete from '../../common/AutoComplete';
import { renderDiv, renderTextField } from '../../common/form/FormFields';
import EditableChip from '../../common/EditableChip';
import { stringToNumber } from '../../common/form/normalizers';

window.R = R;

class MealList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: this.props.selectedValue || 0
    };
  }

  handleSelected = selectedValue => {
    this.setState({ selectedValue });
    this.props.onSelect(selectedValue);
  };

  renderField = (field, index, fields) => {
    const remove = () => fields.remove(index);
    const formFields = (
      <div className="formContentContainer">
        <div className="form-name-quantity">
          <Field
            name={`${field}.name`}
            component={renderTextField}
            label="Name"
          />
        </div>

        <div className="form-quantity">
          <Field
            name={`${field}.quantity`}
            component={renderTextField}
            label="Quantity"
            normalize={stringToNumber}
          />
        </div>
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
          <div className="chip-quantity">
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
          initiallyOpen={fields.get(index).isNew}
          onDelete={remove}
          onToggle={() => delete fields.get(index).isNew}
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
          quantity: 0,
          units: 'grams',
          isNew: true
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
            quantity: 0,
            units: 'grams',
            isNew: true
          });
        }
      }
    };
    return (
      <div className="searchAndChipsContainer">
        <div className="addMealAutocomplete">
          <AutoComplete
            floatingLabelText={'Add a food'}
            items={this.props.foods}
            onSelect={addField}
          />
        </div>
        <ul>{fieldArray.fields.map(this.renderField)}</ul>
      </div>
    );
  };

  render() {
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
            <div className="addMealListItem" key={index}>
              <ListItem
                className="listItem"
                value={index}
                primaryText={meal.name}
                onClick={() => this.handleSelected(index)}
                nestedItems={nestedItems}
              />
            </div>
          );
        })
      : null;
    return <div className="addMealSelectableList">{listItems}</div>;
  }
}

MealList.propTypes = {
  foods: PropTypes.array.isRequired,
  meals: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};
MealList.defaultProps = {};

export default MealList;
