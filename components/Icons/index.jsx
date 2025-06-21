import { Pressable } from 'react-native';
import Svg, { G, Path, Rect } from 'react-native-svg';

export const IconPlay = (props) => {
    return (
        <Svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} {...props}><Path d="M7.168 21.002a3.428 3.428 0 0 1-3.416-3.42V6.418a3.416 3.416 0 0 1 5.124-2.958l9.664 5.581a3.416 3.416 0 0 1 0 5.916l-9.664 5.581a3.41 3.41 0 0 1-1.708.463Z"></Path></Svg>
    );
};

export const IconPause = (props) => {
    return (
        <Svg viewBox="0 0 24 24" width={props.size || 16} height={props.size || 16} {...props}><Path d="M16 22a3.003 3.003 0 0 1-3-3V5a3 3 0 0 1 6 0v14a3.003 3.003 0 0 1-3 3zm-8 0a3.003 3.003 0 0 1-3-3V5a3 3 0 0 1 6 0v14a3.003 3.003 0 0 1-3 3z"></Path></Svg>
    );
};

export const IconCheck = ({ checked, size, ...props }) => {
    return (
        <Svg fill={checked ? "#FFF" : "#000"} width={size || 25} height={size || 25} enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="check-circle" {...props}><Path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.2,10.3l-4.8,4.8c-0.4,0.4-1,0.4-1.4,0l0,0l-2.2-2.2c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0l1.5,1.5l4.1-4.1c0.4-0.4,1-0.4,1.4,0C16.6,9.3,16.6,9.9,16.2,10.3z"></Path></Svg>
    );
};

export const IconDelete = ({ checked, size, ...props }) => {
    return (
        <Svg fill={checked ? "#FFF" : "#000"} width={size || 30} height={size || 30} viewBox="0 0 24 24" baseProfile="tiny" {...props}><Path d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z" /></Svg>
    );
};

export const IconPen = ({ checked, size, ...props }) => {
    return (
        <Svg fill={checked ? "#FFF" : "#000"} width={size || 16} height={size || 16} viewBox="0 0 655.000000 656.000000" preserveAspectRatio="xMidYMid meet"{...props}><G transform="translate(0.000000,656.000000) scale(0.100000,-0.100000)" stroke="none"><Path d="M4650 5972 c-50 -30 -172 -155 -450 -461 -47 -52 -146 -157 -220 -233 -74 -77 -146 -155 -159 -174 l-24 -34 27 -37 c14 -21 58 -67 97 -103 69 -63 436 -423 1119 -1099 245 -242 342 -331 358 -331 23 0 143 119 662 655 157 162 167 178 177 295 7 68 -18 172 -51 215 -13 17 -57 65 -98 106 -40 41 -210 216 -378 388 -865 888 -812 841 -942 841 -62 0 -80 -5 -118 -28z" /><Path d="M2365 3697 c-511 -513 -1087 -1091 -1280 -1286 -192 -194 -378 -379 -413 -411 -37 -34 -74 -80 -90 -112 l-27 -53 0 -655 0 -655 32 -66 c30 -60 39 -69 95 -100 l63 -34 675 0 c644 0 677 1 710 19 48 26 181 150 531 496 164 162 452 446 640 630 1139 1117 1599 1578 1599 1602 0 20 -124 145 -750 758 -199 195 -464 455 -588 578 -145 142 -234 222 -246 222 -14 0 -330 -310 -951 -933z" /></G></Svg>
    );
};

export const IconPlus = (props) => {
    return (
        <Svg width={props.size || 25} height={props.size || 25} viewBox="0 0 24 24" fill="none" {...props}><Path fill-rule="evenodd" clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-5.5-9a1 1 0 1 1 0-2H11V6.5a1 1 0 1 1 2 0V11h4.5a1 1 0 1 1 0 2H13v4.5a1 1 0 1 1-2 0V13H6.5z" fill="#000000" /></Svg>
    );
};

export const IconMenu = (props) => {
    return (
        <Svg width={props.size || 25} height={props.size || 25} enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="list-ul" {...props}><Path fill="#000000" d="M7,8h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H7C6.4,6,6,6.4,6,7S6.4,8,7,8z M21,11H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,11,21,11z M21,16H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,16,21,16z M3.7,6.3C3.6,6.2,3.5,6.1,3.4,6.1C3,5.9,2.6,6,2.3,6.3C2.2,6.4,2.1,6.5,2.1,6.6C2,6.9,2,7.1,2.1,7.4c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.2C2.7,8,2.9,8,3,8c0.3,0,0.5-0.1,0.7-0.3c0.1-0.1,0.2-0.2,0.2-0.3C4,7.1,4,6.9,3.9,6.6C3.9,6.5,3.8,6.4,3.7,6.3z M3.7,11.3C3.4,11,3,10.9,2.6,11.1c-0.1,0.1-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.2,0.3,0.2C2.7,13,2.9,13,3,13c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.2,0.1-0.5,0-0.8C3.9,11.5,3.8,11.4,3.7,11.3z M3.7,16.3c-0.1-0.1-0.2-0.2-0.3-0.2c-0.2-0.1-0.5-0.1-0.8,0c-0.1,0-0.2,0.1-0.3,0.2c-0.1,0.1-0.2,0.2-0.2,0.3C1.9,17,2,17.4,2.3,17.7c0.1,0.1,0.2,0.2,0.3,0.2C2.7,18,2.9,18,3,18c0.1,0,0.3,0,0.4-0.1c0.1-0.1,0.2-0.1,0.3-0.2C4,17.4,4.1,17,3.9,16.6C3.9,16.5,3.8,16.4,3.7,16.3z" /></Svg>
    );
};

export const IconArrow = ({ size, onPress, style }) => {
    return (
        <Pressable onPress={onPress} style={style}><Svg width={size} height={size} viewBox="0 0 20 20"><Path d="M17 9H5.414l3.293-3.293a.999.999 0 10-1.414-1.414l-5 5a.999.999 0 000 1.414l5 5a.997.997 0 001.414 0 .999.999 0 000-1.414L5.414 11H17a1 1 0 100-2z" fill="#000" /></Svg></Pressable>
    );
};

export const IconClock = (props) => {
    return (
        <Svg fill="#000000" width={props.size || 25} height={props.size || 25} viewBox="0 0 24 24" enableBackground="new 0 0 24 24" {...props}><Path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M15.5,14c-0.3,0.5-0.9,0.6-1.4,0.4l-2.6-1.5C11.2,12.7,11,12.4,11,12V7c0-0.6,0.4-1,1-1s1,0.4,1,1v4.4l2.1,1.2C15.6,12.9,15.7,13.5,15.5,14z" /></Svg>
    );
};

export const IconList = (props) => {
    return (
        <Svg width={props.size || 25} height={props.size || 25} viewBox="0 0 24 24" fill="#000" {...props}><Path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5h10M11 9h5" /><Rect width={4} height={4} x={3} y={5} fill="#000000" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} rx={1} /><Path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15h10m-10 4h5" /> <Rect width={4} height={4} x={3} y={15} fill="#000000" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} rx={1} /></Svg>
    );
};