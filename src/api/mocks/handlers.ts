import { delay, http, HttpResponse } from 'msw';
import { pageInfo, signInData } from './mockData';
import { AuthRequestDto } from '../types';

export const handlers = [
    http.post<{ status: 'OK' }, AuthRequestDto>('http://localhost:8080/signin', async ({ request }) => {
        const body = await request.json();

        await delay(3000);

        if (body.login === signInData.login && body.password === signInData.password) {
            return HttpResponse.json({ status: 'authorised' }, { status: 200 });
        }
        return HttpResponse.json({ error: 'Not found' }, { status: 400 });
    }),
    http.get('http://localhost:8080/info', async () => {
        await delay(3000);

        return HttpResponse.json(pageInfo, { status: 200 });
    }),
];
