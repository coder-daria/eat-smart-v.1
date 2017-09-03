import React from 'react';
import './statisticCard.css';
import MaterialIcon from '../../common/MaterialIcon';
import Close from 'material-ui/svg-icons/navigation/close';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import ArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import { cyan500, blue600, pink500 } from 'material-ui/styles/colors';
import { Collapse } from 'react-collapse';

class VisibleCardTileStatistic extends React.Component {
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
  header = () => {
    const editButton = this.props.editable ? (
      <MaterialIcon size="small">
        <Edit hoverColor={blue600} />
      </MaterialIcon>
    ) : null;
    return (
      <div className="title_statistic">
        <div className="title">{this.props.title}</div>
        <div className="statisticIcons">
          {editButton}
          <MaterialIcon size="small" onClick={this.props.onClose}>
            <Close hoverColor={pink500} />
          </MaterialIcon>
        </div>
      </div>
    );
  };
  collapseButton = () => {
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
      <div className="footer">
        <div>{arrowButton}</div>
      </div>
    );
  };

  content = () => (
    <div>
      <Collapse isOpened={this.state.isOpen}>
        <div className="body">{this.props.content}</div>
      </Collapse>
    </div>
  );
  render() {
    let size =
      this.props.size === 'big'
        ? 'bigStatisticContainer'
        : 'smallStatisticContainer';
    const header = this.header();
    const content = this.content();
    const collapseButton = this.collapseButton();
    return (
      <div className={`${size} card`}>
        {header}
        {content}
        {collapseButton}
      </div>
    );
  }
}

function StatisticCard(props) {
  const result = props.visible ? <VisibleCardTileStatistic {...props} /> : null;
  return <div>{result}</div>;
}

StatisticCard.defaultProps = { editable: false };

export default StatisticCard;
