import { api } from './api';
import { InformationResponseDTO } from './types';
import { pageInfo } from './mocks/mockData';
const infoUrl = '/info';

export const infoApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getInfo: builder.query<InformationResponseDTO, void>({
            queryFn: async () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({ data: pageInfo });
                    }, 2000);
                });
            },
        }),
    }),
    overrideExisting: false,
});

export const { useGetInfoQuery } = infoApi;
