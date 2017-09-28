import React from 'react';
import { shallow, mount } from 'enzyme';
import MedalsView from './MedalsView';
import SportRowView from './SportRowView';


describe('MedalsView', () => {

  it('should render no rows when no sport is provided', () => {
    const wrapper = shallow(
      <MedalsView data={{
        NOCMedals: {
          NOC: {
            c_Name: 'United Kingdom',
            c_Short: 'UK'
          },
          Medals: {
            n_Gold: 0,
            n_Silver: 0,
            n_Bronze: 0,
            n_Total: 0,
          }
        },
        SportList: []
      }}/>
    );
    expect(wrapper.find(SportRowView).length).toBe(0);
  });

  it('should render rows when sports are provided', () => {
    const wrapper = shallow(
      <MedalsView data={{
        NOCMedals: {
          NOC: {
            c_Name: 'United Kingdom',
            c_Short: 'UK'
          },
          Medals: {
            n_Gold: 0,
            n_Silver: 0,
            n_Bronze: 0,
            n_Total: 0,
          }
        },
        SportList: [{
          Sport: {
            n_ID: 1,
          }
        }, {
          Sport: {
            n_ID: 2,
          }
        }]
      }}/>
    );
    expect(wrapper.find(SportRowView).length).toBe(2);
  });

});
