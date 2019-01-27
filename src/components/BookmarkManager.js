import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';
import Bookmark from './Bookmark';
import Folder from './Folder';

class BookmarkManagerComponent extends Component {

  render() {
    const { actions, bookmarks } = this.props;
    return (
      <div>
        <span>BookmarkManager</span>
        {bookmarks.list.map((item, index) => (item.type == 'folder')
          ? <Folder key={index} id={item.id} name={item.name} children={item.children} />
          : <Bookmark key={index} id={item.id} name={item.name} url={item.url} />
        )}
        <Link to={"hello"}>hello</Link>
      </div>
    )
  }

}

const mapState = (state, ownProps) => ({
  calculator: state.calculator,
  bookmarks: state.bookmarks
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export const BookmarkManager = connect(mapState, mapDispatch)(BookmarkManagerComponent);
