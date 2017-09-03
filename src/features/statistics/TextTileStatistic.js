import React from 'react';
import './textTileStatistic.css';
import MaterialIcon from '../../common/MaterialIcon';
import Close from 'material-ui/svg-icons/navigation/close';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { cyan500, blue600, pink500 } from 'material-ui/styles/colors';
import { Collapse } from 'react-collapse';

class VisibleTextTileStatistic extends React.Component {
  state = {
    isOpen: true
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen
      };
    });
  };
  render() {
    let arrowUp = (
      <MaterialIcon type="button" onClick={this.toggle}>
        <ArrowUp hoverColor={cyan500} />
      </MaterialIcon>
    );
    let arrowDown = (
      <MaterialIcon type="button" onClick={this.toggle}>
        <ArrowDown hoverColor={cyan500} />
      </MaterialIcon>
    );

    let arrowButton = this.state.isOpen ? arrowUp : arrowDown;
    return (
      <div className="statisticContainer">
        <div className="title_statistic">
          <h3 className="title">Your daily summary</h3>
          <div className="statisticIcons">
            <MaterialIcon iconStyle={{ width: 15 }}>
              <Edit hoverColor={blue600} />
            </MaterialIcon>

            <MaterialIcon iconStyle={{ width: 18, marginLeft: '-40px' }}>
              <Close hoverColor={pink500} />
            </MaterialIcon>
          </div>
        </div>
        <Collapse isOpened={this.state.isOpen}>
          <div className="body">{this.props.dailySummary}</div>
        </Collapse>
        <div className="footer">
          <div>{arrowButton}</div>
        </div>
      </div>
    );
  }
}

function TextTileStatistic(props) {
  const result = props.isVisible ? (
    <VisibleTextTileStatistic {...props} />
  ) : null;
  return <div>{result}</div>;
}

export default TextTileStatistic;
