import React from 'react';
import { shallow, mount } from 'enzyme';

import { Dashboard } from '../dashboard/dashboard';
import { fetchTopHeadlines } from '../../actions/api';

describe('<Dashboard />', () => {
  it('Dispatches fetchTopHeadlines on componentDidMount', () => {
    const dispatch = jest.fn();
    const index = 2;
    const wrapper = shallow(
      <Dashboard dispatch={dispatch}/>
    );
    const instance = wrapper.instance();
    instance.fetchTopHeadlines();
    expect(dispatch).toHaveBeenCalled(fetchTopHeadlines());
  })
})

