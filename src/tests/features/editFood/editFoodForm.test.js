import React from 'react';
import { shallow } from 'enzyme';
import EditFoodForm from '../../../features/editFood/EditFoodForm';
import { Field, reduxForm } from 'redux-form';

function setup() {
  const props = Object.assign({
    handleSubmit: jest.fn(),
    reset: jest.fn(),
    foods: [],
    isSelected: false,
    onSubmit: jest.fn()
  });
  const enzymeWrapper = shallow(<EditFoodForm {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

xdescribe('EditFoodForm', () => {
  let enzymeWrapper, props;
  beforeEach(() => {
    let result = setup();
    enzymeWrapper = result.enzymeWrapper;
    props = result.props;
  });
  it('should render img inside form', () => {
    expect(
      enzymeWrapper
        .find('button')
        .find('img')
        .exists()
    ).toBe(true);
  });
  it('should render buttons by calling the renderButtons function ', () => {});
  describe('should render Field componenet', () => {
    it('inside form', () => {
      expect(
        enzymeWrapper
          .find('form')
          .find(Field)
          .exists()
      ).toBe(true);
    });
    it('with the right props: name', () => {
      const editFoodFormProps = enzymeWrapper
        .find('form')
        .find(Field)
        .props();
      expect(editFoodFormProps.name).toBe('selected');
    });
    it('with the right props: component', () => {
      const editFoodFormProps = enzymeWrapper
        .find('form')
        .find(Field)
        .props();
      expect(editFoodFormProps.component).toBeDefined();
    });
    it('with the right props: label', () => {
      const editFoodFormProps = enzymeWrapper
        .find('form')
        .find(Field)
        .props();
      expect(editFoodFormProps.label).toBe('Select food');
    });
    describe('which should render AutoComplete', () => {
      it('with the right props: items', () => {});
      it('with the right props: onSelect', () => {});
    });
  });
  describe('call renderEditFood function', () => {
    it(' when isSelected is true', () => {
      const { enzymeWrapper } = setup({ isSelected: true });
      const editFoodForm = enzymeWrapper.find(EditFoodForm).props();
      expect(editFoodForm.isSelected).toBe(true);
    });
    it('null when isSelected is false', () => {});
  });
  describe('call renderButtons function', () => {
    it(' with boolean value', () => {
      const { enzymeWrapper } = setup({ disabledSubmit: false });
      const editFoodForm = enzymeWrapper.find(EditFoodForm).props();
      expect(editFoodForm.disabledSubmit).toBe(true);
    });
  });
});
