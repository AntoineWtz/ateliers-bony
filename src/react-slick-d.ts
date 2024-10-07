// src/react-slick-d.ts
import * as React from 'react';

declare module 'react-slick' {
    interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        // Ajoutez d'autres paramètres selon vos besoins
    }

    // Déclarez la classe Slider
    export class Slider extends React.Component<Settings> { }
}
