import React from 'react';
import { render } from '@testing-library/react';
import TopLinks from './top-links';

describe('TopLinks', () => {
  it('should be <nav> element', () => {
    const { container } = render(<TopLinks />);
    expect(container.firstChild).toHaveProperty('tagName', 'NAV');
  });

  it('should have 3 <a> elements', () => {
    const { container } = render(<TopLinks />);
    expect(container.querySelectorAll('a')).toHaveLength(3);
  });

  it('should contain text Email', () => {
    const { container } = render(<TopLinks />);
    expect(container).toHaveTextContent('Email');
  });

  it('should contain text GitHub', () => {
    const { container } = render(<TopLinks />);
    expect(container).toHaveTextContent('GitHub');
  });

  it('should contain text LinkedIn', () => {
    const { container } = render(<TopLinks />);
    expect(container).toHaveTextContent('LinkedIn');
  });
});
