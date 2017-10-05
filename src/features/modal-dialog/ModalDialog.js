import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import './modalDialog.css';
import { Divider } from '../../common/Divider';
import {
  BEER_NAME_LENGTH_IN_SIMILAR,
  BEER_DESCRIPTION_LENGTH_IN_SMALL_DEVICE
} from '../../common/constants.js';
import { trim } from '../../common/common';
// import { CircularProgress } from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';

class ModalDialog extends React.Component {
  handleCloseModal = () => {
    this.props.history.push('/searchFood');
    this.props.onClose();
  };

  render() {
    if (!this.props.selectedBeer) {
      return null;
    }
    const selectedBeer = this.props.selectedBeer;
    const similarBeers = this.props.similarBeers;
    const chosenBeer = () => (
      <div className="chosenBeer">
        <div className="chosenBeerImg">
          <img src={selectedBeer.image_url} alt={selectedBeer.name} />
        </div>
        <div className="beerDatails">
          <div className="beerDetailsName">{selectedBeer.name}</div>
          <div className="beerDetailsTagline">{selectedBeer.tagline}</div>
          <Divider />
          <div className="beerQuality">
            <p>
              <span>IBU:</span>
              {selectedBeer.ibu}
            </p>
            <p>
              <span>ABV:</span> {selectedBeer.abv}%
            </p>
            <p>
              <span>EBC:</span> {selectedBeer.ebc}
            </p>
          </div>
          <div className="beerDescription">
            <p className="big">{selectedBeer.description}</p>
            <p className="small">
              {trim(
                selectedBeer.description,
                BEER_DESCRIPTION_LENGTH_IN_SMALL_DEVICE
              )}
            </p>
          </div>
          <div className="bestWith">
            <div>Best served with:</div>
            <ul className="foodPairing">{foodPairing}</ul>
          </div>
        </div>
      </div>
    );
    const showSimilarBeers = () => {
      if (similarBeers) {
        if (similarBeers.length === 0) {
          return <span>No similar beers found</span>;
        }
        return similarBeers.map((beer, index) => {
          return (
            <li key={index}>
              <div className="similarBeerImg">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className="similarBeerName">
                {trim(beer.name, BEER_NAME_LENGTH_IN_SIMILAR)}
              </div>
            </li>
          );
        });
      } else {
        return (
          <div className="loader">
            {/* <CircularProgress color="accent" size={50} /> */}
          </div>
        );
      }
    };
    const foodPairing = selectedBeer.food_pairing.map((food, index) => {
      return <li key={index}>{food}</li>;
    });

    return (
      <div>
        <ReactModal
          isOpen={true}
          contentLabel="Beer details"
          className="modalWindow">
          <div className="modalContent">
            {chosenBeer()}
            <div className="similarBeers">
              <div>You might also like</div>
              <ul>{showSimilarBeers()}</ul>
            </div>
            <RaisedButton
              label="Close Modal"
              className="closeButton"
              onClick={this.handleCloseModal}
            />
          </div>
        </ReactModal>
      </div>
    );
  }
}

ModalDialog.propTypes = {
  selectedBeer: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  similarBeers: PropTypes.array
};

export default ModalDialog;
