import React from 'react';
import { shallow } from 'enzyme';
import DayPicker from '../../../features/changeDate/DayPicker';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

function setup() {
  const props = { addTodo: jest.fn(), date: new Date(), onSelect: jest.fn() };

  const enzymeWrapper = shallow(<DayPicker {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('DayPicker', () => {
  let enzymeWrapper, props;
  beforeEach(() => {
    let result = setup();
    enzymeWrapper = result.enzymeWrapper;
    props = result.props;
  });
  it('should render a button', () => {
    expect(enzymeWrapper.find('button').exists()).toBe(true);
  });

  describe('should render a DatePicker', () => {
    it('inside a button', () => {
      expect(
        enzymeWrapper
          .find('button')
          .find(DatePicker)
          .exists()
      ).toBe(true);
    });
    it('with the right props: autoOk', () => {
      const datePickerProps = enzymeWrapper
        .find('button')
        .find(DatePicker)
        .props();

      expect(datePickerProps.autoOk).toBe(true);
    });
    it('with the right props: defaultDate', () => {
      const datePickerProps = enzymeWrapper
        .find('button')
        .find(DatePicker)
        .props();

      expect(datePickerProps.defaultDate).toBe(props.date);
    });
    it('with the right props: hintText', () => {
      enzymeWrapper.setState({ fullDateDisplay: 1234 });
      const datePickerProps = enzymeWrapper
        .find('button')
        .find(DatePicker)
        .props();

      expect(datePickerProps.hintText).toBe(1234);
    });
    it('with the right props: onChange', () => {
      const datePickerProps = enzymeWrapper
        .find('button')
        .find(DatePicker)
        .props();

      expect(datePickerProps.onChange).toBeDefined();
    });
  });
  describe('when calling handleChange', () => {
    it('TODO: updates the state with the new date', () => {
      const date = moment().set({ year: 2013, month: 3, day: 25 });
      enzymeWrapper.instance().handleChange(null, date);

      expect(enzymeWrapper.state().fullDateDisplay).toBe('25 April 2013');
    });
    it('calls props.onSelect with the new date', () => {});
  });
});
