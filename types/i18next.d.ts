import type { TDefaultNS, TResources } from '@/app/i18n';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: TDefaultNS;
        resources: TResources;
    }
}
