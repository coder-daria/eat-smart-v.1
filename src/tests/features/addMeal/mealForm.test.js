import React from 'react';
import { shallow } from 'enzyme';
import MealForm from '../../../features/addMeal/mealForm';
import DayPickerContainer from '../../../features/changeDate/DayPickerContainer';
import MealList from '../../../features/addMeal/MealList';
import RaisedButton from 'material-ui/RaisedButton';
import VerticalDivider from '../../../features/addMeal/VerticalDivider';
import MealsDetailsContainer from '../../../features//mealDetails/MealsDetailsContainer';

function setup(defaultProps) {
  const props = Object.assign(
    {
      handleSubmit: jest.fn(),
      onSelect: jest.fn(),
      addMeal: jest.fn(),
      reset: jest.fn(),
      foods: [],
      meals: [],
      date: new Date()
    },
    defaultProps
  );
  const enzymeWrapper = shallow(<MealForm {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('MealForm', () => {
  let enzymeWrapper, props;
  beforeEach(() => {
    let result = setup();
    enzymeWrapper = result.enzymeWrapper;
    props = result.props;
  });
  it(' should render DayPickerContainer component', () => {
    expect(enzymeWrapper.find(DayPickerContainer).exists()).toBe(true);
  });
  it(' should renderVerticalDivider component', () => {
    expect(enzymeWrapper.find(VerticalDivider).exists()).toBe(true);
  });
  it(' should render MealsDetailsContainer component', () => {
    expect(enzymeWrapper.find(MealsDetailsContainer).exists()).toBe(true);
  });

  describe('should render MealList', () => {
    it('inside a form', () => {
      expect(
        enzymeWrapper
          .find('form')
          .find(MealList)
          .exists()
      ).toBe(true);
    });
    it('with the right props: foods', () => {
      const mealListProps = enzymeWrapper
        .find('form')
        .find(MealList)
        .props();
      expect(mealListProps.foods).toBe(props.foods);
    });
    it('with the right props: meals', () => {
      const mealListProps = enzymeWrapper
        .find('form')
        .find(MealList)
        .props();
      expect(mealListProps.meals).toBe(props.meals);
    });

    it('with the right props: onSelect', () => {
      const mealListProps = enzymeWrapper
        .find('form')
        .find(MealList)
        .props();
      expect(mealListProps.onSelect).toBe(props.onSelect);
    });
  });

  describe('should render RaisedButton', () => {
    it('inside a form', () => {
      expect(
        enzymeWrapper
          .find('form')
          .find(RaisedButton)
          .exists()
      ).toBe(true);
    });
    it('with the right props: type', () => {
      const raisedButtonProps = enzymeWrapper
        .find('form')
        .find(RaisedButton)
        .props();
      expect(raisedButtonProps.type).toBe('submit');
    });
    it('with the right props: label', () => {
      const raisedButtonProps = enzymeWrapper
        .find('form')
        .find(RaisedButton)
        .props();
      expect(raisedButtonProps.label).toBe('OK');
    });
    it('with the right props: primary', () => {
      const raisedButtonProps = enzymeWrapper
        .find('form')
        .find(RaisedButton)
        .props();
      expect(raisedButtonProps.primary).toBe(true);
    });
    it('with the right props: disabled', () => {
      const raisedButtonProps = enzymeWrapper
        .find('form')
        .find(RaisedButton)
        .props();
      expect(raisedButtonProps.disabled).toBeDefined();
    });

    it('with the right props: icon', () => {
      const raisedButtonProps = enzymeWrapper
        .find('form')
        .find(RaisedButton)
        .props();
      //TODO find out how to look for <DoneAll /> instead of type.displayName
      expect(raisedButtonProps.icon.type.displayName).toEqual('ActionDoneAll');
    });
  });

  it('cant commit when the form is invalid', () => {
    const { enzymeWrapper } = setup({ invalid: true });
    const raisedButtonProps = enzymeWrapper
      .find('form')
      .find(RaisedButton)
      .props();
    expect(raisedButtonProps.disabled).toBe(true);
  });

  it('cant commit when the form is pristine', () => {
    const { enzymeWrapper } = setup({ invalid: false, pristine: true });
    const raisedButtonProps = enzymeWrapper
      .find('form')
      .find(RaisedButton)
      .props();
    expect(raisedButtonProps.disabled).toBe(true);
  });

  it('can commit when the form is valid and not pristine', () => {
    const { enzymeWrapper } = setup({ invalid: false, pristine: false });
    const raisedButtonProps = enzymeWrapper
      .find('form')
      .find(RaisedButton)
      .props();
    expect(raisedButtonProps.disabled).toBe(false);
  });

  it('calls addMeal after submit with the right values', () => {
    const values = { meals: 123 };
    enzymeWrapper.instance().clearAndSubmit(values);
    expect(props.addMeal).toBeCalled();
    expect(props.addMeal).toBeCalledWith(values.meals, props.date);
  });

  it('resets the form after submit', () => {
    enzymeWrapper.instance().clearAndSubmit({});
    expect(props.reset.mock.calls.length).toBe(1);
  });
});
