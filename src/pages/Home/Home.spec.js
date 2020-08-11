import React from 'react';
import { render, act, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import Home from './';

import { LIST_COUNTRY } from '../../services';

afterEach(cleanup);

describe('Home', () => {
  it('Renderizar componente', () => {
    const mocks = [
      {
        request: {
          query: LIST_COUNTRY
        },
        result: {
          data: {}
        }
      }
    ];

    const { getByText } = render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>
    );

    expect(getByText('Carregando...')).toBeDefined();
  });

  it('Listagem de bandeiras', async () => {
    const mocks = [
      {
        request: {
          query: LIST_COUNTRY
        },
        result: {
          data: {
            Country: [
              {
                name: 'exemplo',
                _id: '1',
                capital: 'capital',
                area: 'area',
                population: 'population',
                topLevelDomains: [{ name: 'name' }],
                flag: {
                  svgFile: 'svgFile'
                }
              }
            ]
          }
        }
      }
    ];

    const { getByText } = render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(() => resolve(true),2000));
    });

    expect(getByText('capital')).toBeDefined();
  });
});
