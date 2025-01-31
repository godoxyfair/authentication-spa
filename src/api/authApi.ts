import { api } from './api';
import { AuthRequestDto } from './types';

const signUrl = '/signin';

export const signApi = api.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation<{ status: 'authorised' }, AuthRequestDto>({
            query: ({ login, password }) => ({
                url: `${signUrl}`,
                method: 'POST',
                body: {
                    login,
                    password,
                },
            }),
            async onQueryStarted(body, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                localStorage.setItem('status', data.status);
            },
        }),
    }),
    overrideExisting: false,
});

export const { useSignInMutation } = signApi;
