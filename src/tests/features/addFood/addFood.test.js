import React from 'react';
import { shallow } from 'enzyme';
import AddFood from '../../../features/addFood/AddFood';

function setup() {
  const props = {};
  const enzymeWrapper = shallow(<AddFood {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

xdescribe('AddFood', () => {
  let enzymeWrapper, props;

  beforeEach(() => {
    let result = setup();
    enzymeWrapper = result.enzymeWrapper;
    props = result.props;
  });

  it('should render a submit button ', () => {
    expect(enzymeWrapper.find('SubmitButton').exists()).toBe(true);
  });
  it('should render a return ', () => {
    expect(enzymeWrapper.find('ReturnButton').exists()).toBe(true);
  });
  it('should render an img ', () => {
    expect(enzymeWrapper.find('img').exists()).toBe(true);
  });
  it('should render a renderAddFood function ', () => {
    // enzymeWrapper.instance().renderAddFood();
    // expect(AddFood.renderAddFood).toBeDefined();
    // expect(enzymeWrapper.find(AddFood.renderAddFood).render().find('.addFoodFieldsContainer').exists()).toBe(true);
  });
});
