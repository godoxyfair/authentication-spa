import { AuthRequestDto, InformationResponseDTO } from '../types';
import imgOTPBank from '../../resources/images/otp/OTP-bank.png';
import imgOTPApp from '../../resources/images/otp/OTP-app.png';
import imgOTPWeb from '../../resources/images/otp/otp-web.png';
import imgGallery from '../../resources/images/museum/gallery.png';
import imgFoto from '../../resources/images/museum/foto-gallery.png';
import imgMain from '../../resources/images/museum/main.png';

export const signInData: AuthRequestDto = {
    login: 'NewTestUser',
    password: '132536',
};

export const pageInfo: InformationResponseDTO = [
    {
        id: '1',
        title: 'OTP Bank',
        aboutText:
            'Participated in the full-cycle development of a banking system from scratch using a Micro Frontend architecture, participated in the creation of API architecture. Involved in developing a large-scale B2C system. Created a UI library based on Material UI.',
        images: [imgOTPWeb, imgOTPBank, imgOTPApp],
        stack: 'React JS, TypeScript, Material UI, Redux, Micro-Frontend',
        link: 'https://www.otpbank.hu/',
    },
    {
        id: '2',
        title: 'Musée imaginaire',
        aboutText:
            'Art Archive Management Platform for Museum Cataloguing and web-application for demonstrating digital archive in museums. Developed a digital archive image storage system with search based on Computer vision. Improved UI libraries creation skills',
        images: [imgFoto, imgGallery, imgMain],
        stack: 'React JS, TypeScript, JavaScript, Redux, Headless UI',
        link: 'https://www.imaginaire.art/en#digital',
    },
];
