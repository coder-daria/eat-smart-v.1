import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';
import AddFood from '../../../features/addFood/AddFood';
import SubmitButton from '../../../common/form/SubmitButton';
import ReturnButton from '../../../common/form/ReturnButton';

function setup() {
  const props = { handleSubmit: jest.fn() };
  const enzymeWrapper = shallow(<AddFood {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('AddFood', () => {
  let enzymeWrapper, props;

  beforeEach(() => {
    let result = setup();
    enzymeWrapper = result.enzymeWrapper;
    props = result.props;
  });
  it('should render 4 Fields inside form', () => {
    expect(enzymeWrapper.find('form').find(Field)).toHaveLength(4);
  });
  it('should render a submit button ', () => {
    expect(enzymeWrapper.find(SubmitButton).exists()).toBe(true);
  });
  it('should render a return button ', () => {
    expect(enzymeWrapper.find(ReturnButton).exists()).toBe(true);
  });
  it('should render an img ', () => {
    expect(enzymeWrapper.find('img').exists()).toBe(true);
  });
  // Fields
  describe('should render 1st Field', () => {
    it('with the right props: name', () => {
      expect(
        enzymeWrapper
          .find(Field)
          .first()
          .props().name
      ).toBe('name');
    });
    it('with the right props: label', () => {
      expect(
        enzymeWrapper
          .find(Field)
          .first()
          .props().label
      ).toBe('Name');
    });
    it('with the right props: type', () => {
      expect(
        enzymeWrapper
          .find(Field)
          .first()
          .props().type
      ).toBe('text');
    });
  });
  describe('should render 2nd Field', () => {
    it('with the right props: name', () => {
      expect(enzymeWrapper.find(Field).get(1).props.name).toBe('fat');
    });
    it('with the right props: label', () => {
      expect(enzymeWrapper.find(Field).get(1).props.label).toBe('Fat');
    });
    it('with the right props: type', () => {
      expect(enzymeWrapper.find(Field).get(1).props.type).toBe('number');
    });
  });
  describe('should render 3rd Field', () => {
    it('with the right props: name', () => {
      expect(enzymeWrapper.find(Field).get(2).props.name).toBe('protein');
    });
    it('with the right props: label', () => {
      expect(enzymeWrapper.find(Field).get(2).props.label).toBe('Protein');
    });
    it('with the right props: type', () => {
      expect(enzymeWrapper.find(Field).get(2).props.type).toBe('number');
    });
  });
  describe('should render 4th Field', () => {
    it('with the right props: name', () => {
      expect(enzymeWrapper.find(Field).get(3).props.name).toBe('carbs');
    });
    it('with the right props: label', () => {
      expect(enzymeWrapper.find(Field).get(3).props.label).toBe('Carbs');
    });
    it('with the right props: type', () => {
      expect(enzymeWrapper.find(Field).get(3).props.type).toBe('number');
    });
  });
  fdescribe('should render Fields', () => {
    it('with the right props: component', () => {
      enzymeWrapper.find(Field).forEach(node => {
        expect(node.props().component).toBeDefined();
      });
    });
  });
  // Submit button
  xdescribe('should render SubmitButton', () => {
    it('with the right props: disabled', () => {
      const submitButtonProps = enzymeWrapper.find(SubmitButton).props();
      expect(submitButtonProps.disabled).toBeDefined();
    });
  });
});
