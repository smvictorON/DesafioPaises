import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import Home from './index';

import { LIST_COUNTRY } from '../../services';

describe('Home', () => {
  it('Renderizar componente', () => {
    const { getByText } = render(
      <MockedProvider>
        <Home />
      </MockedProvider>
    );

    expect(getByText('Carregando...')).toBeDefined();
  });

  it('Listagem de bandeiras', () => {
    const mocks = [
      {
        request: {
          query: LIST_COUNTRY,
          variables: { _id: undefined }
        },
        result: {
          data: {
            Country: [
              {
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

    const { getByText, debug } = render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>
    );

    debug();
  });
});