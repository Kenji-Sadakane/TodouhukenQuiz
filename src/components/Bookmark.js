import React, { Component } from 'react';

class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
    this.bindEvent();
  }

  bindEvent() {
    this.onCheckChange = this.onCheckChange.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
  }

  onCheckChange(e) {
    this.setState({ open: !this.state.open });
  }

  onDragStart(e) {
    console.log('start');
  }

  onDragEnter(e) {
    console.log('enter');
  }

  onDragOver(e) {
    // console.log('over');
  }

  onDragLeave(e) {
    console.log('leave');
  }

  onDragEnd(e) {
    console.log('End');
  }

  onDrop(e) {
    console.log('drop');
    e.stopPropagation();
    e.preventDefault();
    console.log('drop');
  }

  render() {
    const { id, name, url } = this.props;

    return (
      <div id={id} className="column" draggable="true" onDragStart={this.onDragStart} onDragEnter={this.onDragEnter}
         onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDragEnd={this.onDragEnd} onDrop={this.onDrop} >
        <li><a href={url} target="_blank">{name}</a></li>
      </div>
    );
  }
}

export default Bookmark;
