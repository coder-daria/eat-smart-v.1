import React from 'react';
import './textTileStatistic.css';
import MaterialIcon from '../../common/MaterialIcon';
import Close from 'material-ui/svg-icons/navigation/close';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { cyan500, blue600, pink500 } from 'material-ui/styles/colors';
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
        <ArrowUp hoverColor={cyan500} />
      </MaterialIcon>
    );
    let arrowDown = (
      <MaterialIcon type="button" onClick={this.show}>
        <ArrowDown hoverColor={cyan500} />
      </MaterialIcon>
    );

    let arrowButton = this.state.isOpen ? arrowUp : arrowDown;
    return (
      <div className="staticticContainer">
        <div className="header">
          <h3>Your daily summary</h3>
          <div className="statisticIcons">
            <div>
              <MaterialIcon secondary={true} className="edit">
                <Edit hoverColor={blue600} />
              </MaterialIcon>
            </div>
            <div>
              <MaterialIcon>
                <Close hoverColor={pink500} />
              </MaterialIcon>
            </div>
          </div>
        </div>
        <Collapse
          isOpened={this.state.isOpen}
          theme={{ collapse: 'foo', content: 'bar' }}
        >
          <div className="body">
            {this.props.dailySummary}
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
