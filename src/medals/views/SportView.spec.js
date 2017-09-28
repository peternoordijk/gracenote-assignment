import React from 'react';
import { shallow, render, mount } from 'enzyme';
import SportView from './SportView';
import { Container } from 'flux/utils';
import { MemoryRouter } from 'react-router-dom';


// These tests use Enzyme's mount function as we need to test the contents of
// the SportView, which in turn needs to be wrapped inside the MemoryRouter
// because it contains a Link element
describe('SportView', () => {

  it('should contain the colorname', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SportView data={{
          list: [],
          sportName: '',
          color: 'Gold'
        }}/>
      </MemoryRouter>
    );
    expect(wrapper.find('.gold').length).toBe(1);
  });

  it('should contain a message when there are no medals', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SportView data={{
          list: [],
          sportName: '',
          color: 'Gold'
        }}/>
      </MemoryRouter>
    );
    expect(wrapper.contains(<p>404: Medal not found</p>)).toBeTruthy();
  });

  it('should render a list of items the size of the given items', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SportView data={{
          list: [{
            n_EventPhaseID: 123,
            Participant: {
              c_Participant: 'Henk'
            },
            Gender: {
              c_Short: 'M'
            },
            Event: {
              c_Name: '5km'
            }
          }, {
            n_EventPhaseID: 456,
            Participant: {
              c_Participant: 'Wilma'
            },
            Gender: {
              c_Short: 'F'
            },
            Event: {
              c_Name: '2km'
            }
          }],
          sportName: 'Roeien',
          color: 'Gold'
        }}/>
      </MemoryRouter>
    );
    expect(wrapper.contains(<p>404: Medal not found</p>)).toBeFalsy();
    expect(wrapper.find('li').length).toBe(2);
  });

});
