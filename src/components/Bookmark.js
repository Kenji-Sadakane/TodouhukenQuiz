import React from 'react';

const Bookmark = ({id, name, url}) => (
  <div id={id} className="column" draggable="true">
    <li><a href={url} target="_blank">{name}</a></li>
  </div>
);

export default Bookmark;
