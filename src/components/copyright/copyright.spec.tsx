import React from 'react';
import { render } from '@testing-library/react';
import Copyright from './copyright';

describe('Copyright', () => {
  it('should render current full year', () => {
    const year = new Date().getFullYear();
    const { container } = render(<Copyright />);
    expect(container).toHaveTextContent(year.toString());
  });

  it('should render my full name', () => {
    const { container } = render(<Copyright />);
    expect(container).toHaveTextContent('Dan H. Nguyen');
  });
});
