import React from 'react';
import { shallow } from 'enzyme';
import PreferencesParent from '../../../features/preferences/PreferencesForm';
import PreferencesGroup from '../../../features/preferences/PreferencesGroup';

function setup() {
  const props = {
    handleSubmit: jest.fn()
  };
  const enzymeWrapper = shallow(<PreferencesParent {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

xdescribe('PreferencesParent', () => {
  let enzymeWrapper, props;
  beforeEach(() => {
    let result = setup();
    enzymeWrapper = result.enzymeWrapper;
    props = result.props;
  });

  it('should render 3 PreferencesGroup inside form', () => {});
  it('should render PreferenceGroup with the right props: name', () => {});
  it('should render 2 HorizontalDivider inside form', () => {});
  it('should render ReturnButton inside form', () => {});
});
xdescribe('--> PreferencesGroup: Kcal preferences', () => {
  it('should render Field with the right props: name', () => {
    const preferenceGroupWrapper = shallow(<PreferencesGroup />);
    expect(preferenceGroupWrapper.children()).toHaveLength(1);
  });
  it('should render Field with the right props: type', () => {});
  it('should render Field with the right props: component', () => {});
  it('should render Field with the right props: label', () => {});
});
xdescribe('--> PreferencesGroup: Your meal preferences', () => {
  it('should render FieldArray with the right props: name', () => {});
  it('should render FieldArray with the right props: component', () => {});
});
xdescribe('--> PreferencesGroup: Meal details preferences', () => {
  it('should render MealDetailsPreferences ', () => {});
});
xdescribe('should render SubmitButton', () => {
  it('with the right props: disabled ', () => {});
  // check functionality of button
});
