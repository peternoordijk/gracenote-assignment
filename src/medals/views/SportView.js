import React from 'react';
import { Link } from 'react-router-dom';

export default ({ data: {
  list,
  sportName,
  color,
}}) => (
  <div>
    <Link to="/">Back</Link>
    <h2>{ sportName } <small className={color.toLowerCase()}>{ color }</small></h2>
    { list.length ? (
      <ul>
        { list.map(medal => (
          <li key={medal.n_EventPhaseID}>
            <h3>{ medal.Participant.c_Participant }</h3>
            <p><small>{ medal.Gender.c_Short === 'M' ? '♂' : '♀' }</small> { medal.Event.c_Name }</p>
          </li>
        )) }
      </ul>
    ) : (
      <p>404: Medal not found</p>
    ) }
  </div>
);
