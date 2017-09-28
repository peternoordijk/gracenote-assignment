import React from 'react';
import SportRowView from './SportRowView';


export default ({ data: { NOCMedals, SportList } }) => {
  const country = NOCMedals.NOC.c_Name,
    countryShort = NOCMedals.NOC.c_Short,
    medals = NOCMedals.Medals;

  return (
    <div>
      <h2><small>{ countryShort }</small> { country }</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="gold">GOLD</th>
            <th className="silver">SILVER</th>
            <th className="bronze">BRONZE</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          { SportList.map(sport => (
            <SportRowView
              sport={sport}
              key={sport.Sport.n_ID}
            />
          )) }
          <tr>
            <td><b>Total</b></td>
            <td><b>{ medals.n_Gold }</b></td>
            <td><b>{ medals.n_Silver }</b></td>
            <td><b>{ medals.n_Bronze }</b></td>
            <td><b>{ medals.n_Total }</b></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};
