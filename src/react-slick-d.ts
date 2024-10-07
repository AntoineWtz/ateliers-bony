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
    }

    export class Slider extends React.Component<Settings> { }
}
