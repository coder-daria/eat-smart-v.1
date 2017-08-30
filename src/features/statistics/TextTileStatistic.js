import React from 'react';
import './textTileStatistic.css';
import MaterialIcon from '../../common/MaterialIcon';
import Close from 'material-ui/svg-icons/navigation/close';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { Collapse } from 'react-collapse';

class TextTileStatistic extends React.Component {
  state = {
    isOpen: true
  };

  hide = () => {
    this.setState({
      isOpen: false
    });
  };
  show = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };
  render() {
    let arrowUp = (
      <MaterialIcon type="button" onClick={this.hide}>
        <ArrowUp />{' '}
      </MaterialIcon>
    );
    let arrowDown = (
      <MaterialIcon type="button" onClick={this.show}>
        <ArrowDown />{' '}
      </MaterialIcon>
    );

    let arrowButton = this.state.isOpen ? arrowUp : arrowDown;
    return (
      <div className="staticticContainer">
        <div className="header">
          <h3>Title</h3>
          <div className="icons">
            <div>
              <MaterialIcon>
                <Edit />
              </MaterialIcon>
            </div>
            <div>
              <MaterialIcon>
                <Close />
              </MaterialIcon>
            </div>
          </div>
        </div>
        <Collapse
          isOpened={this.state.isOpen}
          theme={{ collapse: 'foo', content: 'bar' }}
        >
          <div className="body">
            <div className="number">1900</div>
            <div className="information">Some information</div>
          </div>
        </Collapse>
        <div className="footer">
          <div>
            {arrowButton}
          </div>
        </div>
      </div>
    );
  }
}

export default TextTileStatistic;
