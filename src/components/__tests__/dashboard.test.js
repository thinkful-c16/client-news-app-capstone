import React from 'react';
import { shallow, mount } from 'enzyme';

import { Dashboard } from '../dashboard/dashboard';

describe('<Dashboard />', () => {
  it('Renders without crashing', () => {
    shallow(<Dashboard />);
  })
})

