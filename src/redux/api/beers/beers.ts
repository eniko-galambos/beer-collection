import api from '../api';
import { ListBeersParams } from './types';

const beersApi = api.injectEndpoints({
  endpoints: (build) => ({
    listBeers: build.query<[], {}>({
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
  }),
});

export const { useListBeersQuery } = beersApi;
