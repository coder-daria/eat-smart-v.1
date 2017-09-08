import React from 'react';
import { shallow } from 'enzyme';
import PreferencesGroup from '../../../features/preferences/PreferencesGroup';

function setup() {
  const props = {};
  const enzymeWrapper = shallow(<PreferencesGroup {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

xdescribe('PreferencesGroup', () => {
  let enzymeWrapper, props;
  beforeEach(() => {
    let result = setup();
    enzymeWrapper = result.enzymeWrapper;
    props = result.props;
  });

  it('should render a name', () => {
    const preferencesGroupProps = enzymeWrapper.find(PreferencesGroup).props();

    expect(preferencesGroupProps.name).toBeDefined();
  });
  it('should render children', () => {
    const preferencesGroupProps = enzymeWrapper.find(PreferencesGroup).props();

    expect(preferencesGroupProps.children).toBeDefined();
  });
});
