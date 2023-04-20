import React from 'react';
import { style, styleGroupBotton } from './NavBar.styles';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const NavBar = () => {
    return (
        <div style={style}>
            <div style={{
                width: 90,
                height: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 25,
            }}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 35.935 10.574"
                xmlSpace="preserve"
            >
                <g transform="translate(-7.704 -6.636)">
                    <path
                        fill="#fff"
                        strokeWidth="0.04"
                        d="M23.144 17.176a5.476 5.476 0 01-2.28-.858l-.322-.212-.375-.355-.375-.356-.25-.35a7.084 7.084 0 01-.462-.77l-.21-.42-.105-.341c-.131-.432-.22-.935-.22-1.248v-.244l.06-.05a.297.297 0 01.161-.049h.103l.063.063.063.063.052.409c.072.56.179.959.378 1.413l.169.385.233.348.232.348.345.35.344.35.298.209c.544.382 1.059.61 1.727.764l.358.083.517.02.518.02.414-.066.414-.065.359-.123a4.82 4.82 0 003.019-3.027c.143-.426.21-.779.24-1.275l.028-.437-.067-.451a4.749 4.749 0 00-.793-2.068l-.253-.38-.353-.34-.353-.34-.313-.212a6.233 6.233 0 00-.677-.383l-.363-.172-.474-.118a6.582 6.582 0 00-.743-.143l-.27-.026-.064-.099-.065-.099.036-.102a.323.323 0 01.104-.144l.067-.042.37.046c1.357.172 2.471.766 3.406 1.817l.282.317.234.397c.388.658.63 1.375.716 2.121.054.471.05.759-.02 1.288a5.164 5.164 0 01-.84 2.24l-.224.338-.368.382-.367.383-.317.228a5.327 5.327 0 01-2.046.906l-.365.08-.556.015-.555.015zm-.083-.876c-.734-.115-1.68-.594-2.263-1.145l-.15-.14v-.247l.049-.047c.026-.027.098-.048.16-.048h.112l.247.21c.49.415 1.055.712 1.653.868l.301.079.462.023.461.022.392-.07a3.73 3.73 0 001.128-.378c1.024-.515 1.788-1.508 2.05-2.666l.066-.292.001-.536.001-.536-.086-.35a5.423 5.423 0 00-.234-.691l-.146-.34-.215-.302c-.52-.733-1.192-1.235-2.014-1.508l-.357-.12-.338-.045-.337-.045-.07-.063-.07-.062v-.187l.084-.083.084-.084.224.026c.57.065 1.008.187 1.494.414.465.219.78.444 1.197.857l.363.36.223.343c.425.654.66 1.338.721 2.098l.028.338-.047.429-.046.429-.1.345c-.114.394-.33.872-.55 1.219l-.152.238-.44.437-.442.437-.345.212a4.36 4.36 0 01-1.243.529l-.318.08-.655.014-.655.014zM7.714 11.944l.01-3.525h3.455l.011.407.011.407H8.578v2.302l1.221.01 1.22.011v.794l-1.22.01-1.22.011-.01 1.538-.01 1.538-.428.012-.427.01zm3.604-.01V8.398h.873v7.068h-.873zm2.938.417V9.233H12.35V8.4l2.333.01 2.333.01v.794l-.943.011-.943.01-.01 3.107-.01 3.106-.427.012-.427.011zm9.476 3.043c-.17-.187-.003-.403.311-.403.08 0 .273-.028.43-.063l.286-.062.397-.196.397-.195.22-.188c.6-.515.957-1.168 1.073-1.963l.048-.322-.023-.27a3.11 3.11 0 00-.86-1.918 3.06 3.06 0 00-1.736-.897l-.26-.037-.075-.068-.075-.068v-.183l.09-.084.089-.084.218.027c.12.015.37.071.556.125l.338.098.271.146c.15.08.415.26.59.4l.317.254.196.242.196.243.214.437.214.437.066.258.066.258.021.476.02.477-.08.393-.082.392-.218.441-.218.441-.299.342-.3.342-.297.205a3.367 3.367 0 01-1.192.541l-.389.1h-.454zm6.883-3.461V8.398l1.738.01 1.737.011.011.407.011.407H31.45v2.263h2.462v.793l-1.22.011-1.222.01-.01 1.162-.011 1.161h2.817l.012.348.011.347.235-.377 1.02-1.635c.431-.692.804-1.294.827-1.338l.043-.08-.51-.846c-.874-1.45-1.555-2.603-1.555-2.63 0-.014.225-.02.5-.014l.5.011.787 1.33c.434.73.805 1.334.825 1.34l.036.013.592-1.002.791-1.342.2-.339.485-.011.486-.011v.041c0 .023-.221.404-.491.845-.27.442-.736 1.211-1.036 1.71l-.546.906.449.742c.247.408.73 1.203 1.076 1.768.345.564.627 1.033.627 1.042 0 .01-.229.016-.508.016h-.508l-.836-1.389-.837-1.389-.061.069c-.034.038-.31.48-.615.982s-.667 1.096-.805 1.32l-.25.407h-4.594zm9.38.01l.011-3.524h3.455l.01.407.012.407H40.82v2.262l1.24.01 1.242.011v.755l-1.231.02-1.231.02-.01 1.161-.011 1.161h2.82v.834h-3.653zm-16.529 2.211a2.277 2.277 0 01-.906-.357l-.234-.157-.177-.208a2.276 2.276 0 01-.473-.844l-.09-.278.002-.357.001-.357.07-.239a3.38 3.38 0 01.21-.507l.141-.27.286-.266.286-.267.215-.108a2.74 2.74 0 01.451-.169l.237-.06h.667l.244.063c.134.034.35.118.482.187l.238.124.278.28.278.279.124.238c.069.131.154.356.189.499l.064.26v.676l-.063.216a3.272 3.272 0 01-.202.48l-.138.264-.266.257-.266.256-.295.15-.296.148-.299.053c-.333.06-.437.062-.758.014z"
                    ></path>
                </g>
            </svg>
            </div>
            <div style={{
                width: "93%",
                height: "100%",
                float: "right",
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
            }}>
                <SettingsIcon sx={{
                    fontSize: 30,
                }} 
                style={{
                    marginRight: "10px",
                }}/>
                <PowerSettingsNewIcon 
                sx={{
                    fontSize: 30,
                }}
                style={{
                    marginRight: "10px",
                }}/>

            </div>
        </div>
    )
}

export default NavBar