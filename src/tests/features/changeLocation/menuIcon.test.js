import React from 'react';
import { shallow } from 'enzyme';
import MenuIcon from '../../../features/changeLocation/MenuIcon';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

function setup() {
  const props = {
    history: [],
    onSelect: jest.fn(),
    value: 0
  };
  const enzymeWrapper = shallow(<MenuIcon {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

xdescribe('MenuIcon', () => {
  let enzymeWrapper, props;
  beforeEach(() => {
    let result = setup();
    enzymeWrapper = result.enzymeWrapper;
    props = result.props;
  });
  describe('should render IconMenu component', () => {
    it(' with the right props: iconButtonElement', () => {
      const iconMenuProps = enzymeWrapper.find(IconMenu).props();
      expect(iconMenuProps.iconButtonElement).toBeDefined();
    });
    it(' with the right props: menuItemStyle', () => {
      const iconMenuProps = enzymeWrapper.find(IconMenu).props();
      expect(iconMenuProps.iconButtonElement).toBeDefined();
    });
    it(' with the right props: anchorOrigin', () => {
      const iconMenuProps = enzymeWrapper.find(IconMenu).props();
      expect(iconMenuProps.anchorOrigin).toBeDefined();
    });
    it(' with the right props: targetOrigin', () => {
      const iconMenuProps = enzymeWrapper.find(IconMenu).props();
      expect(iconMenuProps.targetOrigin).toBeDefined();
    });
    it(' with the right props: value', () => {
      const iconMenuProps = enzymeWrapper.find(IconMenu).props();
      expect(iconMenuProps.value).toBeDefined();
    });
    it(' with the right props: onItemTouchTap', () => {
      const iconMenuProps = enzymeWrapper.find(IconMenu).props();
      expect(iconMenuProps.onItemTouchTap).toBeDefined();
    });
    it('and its children MenuItems', () => {
      expect(
        enzymeWrapper
          .find(IconMenu)
          .find(MenuItem)
          .exists()
      ).toBe(true);
    });
  });
  describe('should render MenuItems', () => {
    it('with the right props: value', () => {
      const menuItemsProps = enzymeWrapper.find(MenuItem).props();
      expect(menuItemsProps.value).toBeDefined();
    });
    it('with the right props: primaryText', () => {
      const menuItemsProps = enzymeWrapper.find(MenuItem).props();
      expect(menuItemsProps.primaryText).toBeDefined();
    });
  });
  describe('when calling handleClick', () => {
    it('pushes to this.props.history the new value', () => {});
    it('calls this.props.onSelect with the new value', () => {});
  });
});
