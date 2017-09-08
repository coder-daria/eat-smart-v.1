import React from 'react';
import { shallow } from 'enzyme';
import MealDetails from '../../../features/mealDetails/MealDetails';
import StatisticCard from '../../features/statistic/StatisticCard';

function setup() {
  const props = Object.assign({
    onSelect: jest.fn(),
    meals: []
  });
  const enzymeWrapper = shallow(<MealDetails {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

xdescribe('MealDetails', () => {
  let enzymeWrapper, props;
  beforeEach(() => {
    let result = setup();
    enzymeWrapper = result.enzymeWrapper;
    props = result.props;
  });

  it('should render 4 StatisticCard', () => {});
  describe('should render 4 StatisticCard', () => {
    it('with the right props: onClose', () => {
      const statisticCardProps = enzymeWrapper.find(StatisticCard).props();
      expect(statisticCardProps.onClose).toBeDefined();
    });
    it('with the right props: visible', () => {
      const statisticCardProps = enzymeWrapper.find(StatisticCard).props();
      expect(statisticCardProps.visible).toBeDefined();
    });
    it('with the right props: content', () => {
      const statisticCardProps = enzymeWrapper.find(StatisticCard).props();
      expect(statisticCardProps.content).toBeDefined();
    });
    it('with the right props: title', () => {
      const statisticCardProps = enzymeWrapper.find(StatisticCard).props();
      expect(statisticCardProps.title).toBeDefined();
    });
  });
  describe('StatisticCard with title Daily', () => {
    it('closes after clicking close icon', () => {
      //check attribute onClose
    });
    it('shows daily calories', () => {
      //check attribute visible
    });
    it('calls the dailySummary function', () => {
      //check attribute cotent
    });
  });
  describe('StatisticCard with title Goal', () => {
    it('closes after clicking close icon', () => {
      //check attribute onClose
    });
    it('shows daily calories left', () => {
      //check attribute visible
    });
    it('calls the dailyKcalLeft function', () => {
      //check attribute cotent
    });
  });
  describe('StatisticCard with title Meal chart', () => {
    it('closes after clicking close icon', () => {
      //check attribute onClose
    });
    it('shows calories per meal', () => {
      //check attribute visible
    });
    it('renders a MealPercentagesGraph', () => {
      //check attribute content
    });
    it('belong to the big sized components', () => {
      //check attribute size
    });
    it('renders a MealPercentagesGraph with the right props: meal', () => {
      //check MealPercentagesGraph's attribute meal
    });
  });
  describe('StatisticCard with title Daily chart', () => {
    it('closes after clicking close icon', () => {
      //check attribute onClose
    });
    it('shows eaten calories', () => {
      //check attribute visible
    });
    it('renders a DailyPercentagesGraph', () => {
      //check attribute content
    });
    it('belong to the big sized components', () => {
      //check attribute size
    });
  });
});

// handleChange in MealsDetails.js is not used anywhere.
