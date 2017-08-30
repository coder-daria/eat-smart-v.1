import React from 'react';
import './textTileStatistic.css';
import MaterialIcon from '../../common/MaterialIcon';
import Close from 'material-ui/svg-icons/navigation/close';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

class TextTileStatistic extends React.Component {
  show = () => {
    return (
      <div className="showedBody">
        <div className="number">1900</div>
        <div className="information">Some information</div>
      </div>
    );
  };
  hide = () => {};
  render() {
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
        <div className="body">
          <div className="number">1900</div>
          <div className="information">Some information</div>
        </div>
        <div className="footer">
          <div>
            <MaterialIcon type="button" onClick={this.hide}>
              <ArrowUp />
            </MaterialIcon>
          </div>
        </div>
      </div>
    );
  }
}

export default TextTileStatistic;
