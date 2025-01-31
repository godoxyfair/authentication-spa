import { api } from './api';
import { InfomationResponseDTO } from './types';

const infoUrl = '/info';

export const infoApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getInfo: builder.query<InfomationResponseDTO, void>({
            query: () => ({
                url: `${infoUrl}`,
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetInfoQuery } = infoApi;
