import React, { Component } from 'react';
import styled from 'styled-components';
import Bookmark from './Bookmark';

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { id, name, children } = this.props;
    const { open } = this.state;

    return (
      <Wrapper ggg>
        <div className="column folder" draggable="true">
          <input type="checkbox" id={id} checked={open} onChange={this.handleChange} className="folderCheck" />
          <label htmlFor={id}>{name}</label>
        </div>
        <div className="accordion" open={open}>
          {children.map((item, index) => (item.type == 'folder')
            ? <Folder key={index} id={item.id} name={item.name} children={item.children} />
            : <Bookmark key={index} id={item.id} name={item.name} url={item.url} />
          )}
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  input[type="checkbox"] {
    display: none;
  }
  .accordion {
    padding-left: ${props => props.ggg ? 3 : 0}em;
    opacity: 0;
    max-height: 0px;
    overflow-y: hidden;
    transition: all 0.5s;
  }
  .accordion[open] {
    opacity: 1;
    max-height: 20em;
  }
`;

export default Folder;
