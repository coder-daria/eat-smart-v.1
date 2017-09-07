import React from 'react';
import { shallow } from 'enzyme';
import MealList from '../../../features/addMeal/MealList';
import { ListItem } from 'material-ui/List';

function setup(defaultProps) {
  const props = Object.assign(
    {
      onSelect: jest.fn(),
      foods: [],
      meals: []
    },
    defaultProps
  );
  const enzymeWrapper = shallow(<MealList {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

xdescribe('MealList', () => {
  let enzymeWrapper, props;
  beforeEach(() => {
    let result = setup();
    enzymeWrapper = result.enzymeWrapper;
    props = result.props;
  });
  describe('should render ListItem component', () => {
    it('with the right props: className', () => {
      let listItemProps = enzymeWrapper.find('ListItem').props();
      expect(listItemProps.className).toBe('listItem');
    });
    it('with the right props: value', () => {
      let listItemProps = enzymeWrapper.find('ListItem').props();
      expect(listItemProps.value).toBeDefined();
    });
    it('with the right props: primaryText', () => {
      let listItemProps = enzymeWrapper.find('ListItem').props();
      expect(listItemProps.primaryText).toBeDefined();
    });
    it('with the right props: onClick', () => {
      let listItemProps = enzymeWrapper.find('ListItem').props();
      // expect(listItemProps.onClick).toBe();
    });
    it('with the right props: nestedItems', () => {
      let listItemProps = enzymeWrapper.find('ListItem').props();
      expect(listItemProps.nestedItems).toBeDefined();
    });
  });
  describe('when calling handleSelected', () => {
    it('updates the state with the selected value', () => {
      const value = 4;
      enzymeWrapper.instance().handleChange(value);

      expect(enzymeWrapper.state().selectedValue).toBe(4);
    });
    it('calls props.onSelect with the selectedValue', () => {});
  });
});
