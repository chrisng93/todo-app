import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import { currentTodoListSelector, currentRemainingSelector } from '../selectors/todoSelectors';

const propTypes = {
  currentTodoList: T.object,
  currentRemainingSelector: T.number,

  markAllComplete: T.func,
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.onMarkAllComplete = this.onMarkAllComplete.bind(this);
  }

  onMarkAllComplete() {
    const { markAllComplete, currentTodoList } = this.props;
    markAllComplete(currentTodoList);
  }

  render() {
    const { currentRemaining } = this.props;
    return (
      <div className="footer">
        <div className="footer-itemsleft">
          {currentRemaining} items left
        </div>
        <a className="footer-markallcomplete" onClick={this.onMarkAllComplete}>
          Mark all as complete
        </a>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentTodoList: currentTodoListSelector(state),
    currentRemaining: currentRemainingSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markAllComplete: bindActionCreators(actions.markAllComplete, dispatch),
  };
};

Footer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
