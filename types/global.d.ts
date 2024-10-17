declare namespace NodeJS {
    interface ProcessEnv {
        readonly CRP_IB_SME_ENV: 'dev' | 'dev_a' | 'dev_r' | 'test' | 'uat' | 'prod';
    }
}

declare const API_GATEWAY_URL: string;
declare const DOMAIN: string;
declare const KEYCLOAK_URL: string;
declare const YANDEX_METRIKA_COUNTER_ID: number;
