import api from '../api';

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ answer: string }, {}>({
      query: () => ({
        url: 'https://yesno.wtf/api',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
