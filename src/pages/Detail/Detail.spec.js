import React from 'react';
import { render, act, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, Route } from 'react-router-dom';

import Detail from './';

import { LIST_COUNTRY } from '../../services';

afterEach(cleanup);

describe('Detail', () => {
  it('Alterar informações', async () => {
    const mocks = [
      {
        request: {
          query: LIST_COUNTRY,
          variables: {id:'661'},
        },
        result: {
          data: {
            Country: [
              {
                name: 'Brazil',
                _id: '661',
                capital: 'Brasília',
                area: 8515767,
                population: 206135893,
                topLevelDomains: [{ name: '.br' }],
                flag: {
                  svgFile: 'https://restcountries.eu/data/bra.svg'
                }
              }
            ]
          }
        }
      }
    ];

    render(
      <MemoryRouter initialEntries={['detail/661']}>
        <MockedProvider mocks={mocks}>
          <Route path="detail/:id">
            <Detail />
          </Route>        
        </MockedProvider>
      </MemoryRouter>
    );
    
    await act(async () => {
      await new Promise((resolve) => setTimeout(() => resolve(true),2000));
    });

    expect(document.querySelector('input[value="Brazil"]')).toBeDefined();
    expect(document.querySelector('input[value="Brasília"]')).toBeDefined();
    expect(document.querySelector('input[value="8515767"]')).toBeDefined();
    expect(document.querySelector('input[value="206135893"]')).toBeDefined();
    expect(document.querySelector('input[value=".br"]')).toBeDefined();
  });
});
