import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions) => {
        const token = localStorage.getItem('token');

        const result = await fetchBaseQuery({
            credentials: 'include',
            mode: 'cors',
            baseUrl: 'http://localhost:8080/',
            prepareHeaders: (headers) => {
                headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));

                return headers;
            },
        })(args, api, extraOptions);

        if (result.error && result.error.status === 401) {
            //TODO:refrechTokenApi
        }

        return result;
    },
    endpoints: () => ({}),
});
