import React from 'react';

import { render } from '@testing-library/react';
import NotFound from '../../pages/NotFound';

describe('Button component', () => {
  it('should be able to render a button', () => {
    const { getAllByTestId } = render(<NotFound />);

    expect(getAllByTestId('notfound-container')).toBeTruthy();
  });
});
