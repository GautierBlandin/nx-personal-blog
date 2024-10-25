import { render } from '@testing-library/react';

import WebArticles from './web-articles';

describe('WebArticles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebArticles />);
    expect(baseElement).toBeTruthy();
  });
});
