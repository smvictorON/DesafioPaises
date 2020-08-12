import React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from './App';

afterEach(cleanup);

describe('App', () => {
  it('Render', () => {
    const { getByText } = render(<App />);
    expect(getByText('Carregando...')).toBeDefined();
  });
});
