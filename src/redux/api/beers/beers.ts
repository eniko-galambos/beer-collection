import api from '../api';
import { Beer, ListBeersParams } from './types';

const beersApi = api.injectEndpoints({
  endpoints: (build) => ({
    listBeers: build.query<Beer[], {}>({
      query: (parameters: { page: number; searchKey: string }) => {
        const params: ListBeersParams = {
          page: parameters.page,
          per_page: 24,
        };

        if (parameters.searchKey) {
          params.beer_name = parameters.searchKey;
        }

        return {
          url: 'https://api.punkapi.com/v2/beers',
          params,
          method: 'GET',
        };
      },
    }),
    getBeer: build.query<Beer[], {}>({
      query: (parameters: { id: number }) => {
        return {
          url: `https://api.punkapi.com/v2/beers/${parameters.id}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useListBeersQuery, useGetBeerQuery } = beersApi;
