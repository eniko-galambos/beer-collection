import api from '../api';

const beersApi = api.injectEndpoints({
  endpoints: (build) => ({
    listBeers: build.query<{}, {}>({
      query: (params: { page: number }) => ({
        url: 'https://api.punkapi.com/v2/beers',
        params: {
          page: params.page,
          per_page: 24,
        },
        method: 'GET',
      }),
    }),
  }),
});

export const { useListBeersQuery } = beersApi;
