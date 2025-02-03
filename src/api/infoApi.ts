import { api } from './api';
import { InformationResponseDTO } from './types';

const infoUrl = '/info';

export const infoApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getInfo: builder.query<InformationResponseDTO, void>({
            query: () => `${infoUrl}`,
        }),
    }),
    overrideExisting: false,
});

export const { useGetInfoQuery } = infoApi;
