import React from 'react';

export default function Project(props) {
  return (
    <div className="project">
      <a href={props.link}>
        <h2>{props.title}</h2>
      </a>
      <p>{props.description}</p>
    </div>
  )
}
