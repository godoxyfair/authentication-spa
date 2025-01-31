declare namespace NodeJS {
    interface ProcessEnv {
        readonly CRP_IB_SME_ENV: 'dev' | 'dev_a' | 'dev_r' | 'test' | 'uat' | 'prod';
    }
}
