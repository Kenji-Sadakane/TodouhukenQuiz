import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import NumBtn from './NumBtn';

class HelloComponent extends Component {
  render() {
    const { actions } = this.props;
    return (
      <div>
        <span>hello</span>
        <div>
          <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
          <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
        </div>
        <div>
          <NumBtn n={3} onClick={() => actions.onNumClick(4)} />
          <NumBtn n={4} onClick={() => actions.onNumClick(5)} />
        </div>
        <Link to={"sample"}>sample</Link>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  calculator: state.calculator,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export const Hello = connect(mapState, mapDispatch)(HelloComponent);
