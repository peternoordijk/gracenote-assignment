import React from 'react';
import { Link } from 'react-router-dom';

export default ({ sport }) => (
  <tr>
    <td>{sport.Sport.c_Name}</td>
    <td><Link to={"/sport/" + sport.Sport.n_ID + "/gold"}>{sport.Medals.n_Gold}</Link></td>
    <td><Link to={"/sport/" + sport.Sport.n_ID + "/silver"}>{sport.Medals.n_Silver}</Link></td>
    <td><Link to={"/sport/" + sport.Sport.n_ID + "/bronze"}>{sport.Medals.n_Bronze}</Link></td>
    <td>{sport.Medals.n_Total}</td>
  </tr>
);
