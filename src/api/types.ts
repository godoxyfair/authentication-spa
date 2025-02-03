export type AuthRequestDto = {
    login: string;
    password: string;
};

export type InformationDTO = {
    id: string;
    title: string;
    aboutText: string;
    images: Array<string>;
    stack: string;
    link: string;
};

export type InformationResponseDTO = Array<InformationDTO>;
