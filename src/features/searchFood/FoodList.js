import React from 'react';
import PropTypes from 'prop-types';
import './foodList.css';
import InfiniteScroll from 'react-infinite-scroller';
// import { CircularProgress } from 'material-ui/CircularProgress';
import { BEER_DESCRIPTION_LENGTH_IN_LIST } from '../../common/constants';
import { trim } from '../../common/common';

class FoodList extends React.Component {
  handleClick = (beer, index) => {
    this.props.fetchSimilarBeers(beer);
    this.props.history.push(`/details/${index}`);
  };

  loadItems = () => {
    this.props.getMoreBeers(this.props.pageNumber);
  };

  renderBeers = () => {
    let beers;
    if (this.props.beers !== null) {
      let list = this.props.beers;
      beers = list.map((beer, index) => {
        return (
          <div className="beerContainer" key={index}>
            <li
              className="listElement"
              onClick={() => this.handleClick(beer, index)}>
              <img src={beer.image_url} alt={beer.name} />
              <div className="beerNamesContainer">
                <p className="beerName">{beer.name}</p>
                <p className="beerTagline">
                  {trim(beer.tagline, BEER_DESCRIPTION_LENGTH_IN_LIST)}
                </p>
              </div>
            </li>
          </div>
        );
      });
    }
    return beers;
  };

  render() {
    return (
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems}
          hasMore={this.props.serverHasMoreBeers}
          loader={
            <div className="loader">
              {/* <CircularProgress color="accent" size={50} /> */}
            </div>
          }
          useWindow={true}>
          <ul className="list">{this.renderBeers()}</ul>
        </InfiniteScroll>
      </div>
    );
  }
}

FoodList.propTypes = {
  history: PropTypes.object.isRequired,
  pageNumber: PropTypes.number.isRequired,
  serverHasMoreBeers: PropTypes.bool.isRequired,
  beers: PropTypes.array.isRequired,
  getMoreBeers: PropTypes.func.isRequired,
  fetchSimilarBeers: PropTypes.func.isRequired
};

export default FoodList;
