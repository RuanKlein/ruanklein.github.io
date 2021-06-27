import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';

import Terminal from '../Components/Terminal';
import { CommandType } from '../Components/Terminal/types';
import { getBrowser, getOperatingSystem, getPublicIp } from '../Helpers/Device';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [welcomeMessage, setWelcomeMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const ip = await getPublicIp();
            const browser = getBrowser();
            const os = getOperatingSystem();

            const dateNow = new Date().toISOString().slice(0, 19).replace('T', ' ');

            setWelcomeMessage(`[${dateNow}] IP ${ip}, ${browser} from ${os} `);
        };
        fetchData();
    }, []);

    const onChangeThemeCommand = () => {
        setDarkTheme(prev => !prev);
        return `theme changed to '${darkTheme ? 'light' : 'dark'}'`;
    };

    const onAboutMe = () => {
        return JSON.stringify({
            name: 'Ruan',
            state: 'Paraná',
            city: 'Curitiba',
            skills: ['JavaScript', 'TypeScript', 'Node.js', 'React.js', 'PHP', 'Shell Script'],
            social: {
                linkedin: 'https://www.linkedin.com/in/ruanklein/',
                github: 'https://github.com/RuanKlein'
            }
        });
    };

    const commandList : CommandType = {
        'about-me': onAboutMe,
        'change-theme': onChangeThemeCommand,
        help: 'Commands: about-me, change-theme, clear'
    };

    return <>
        <GlobalStyle darkTheme={darkTheme} />
        <Terminal
            dark={darkTheme}
            commandList={commandList}
            commandNotFound="Command not found. Type 'help' to print available commands."
            welcome={welcomeMessage}
        />
    </>;
};

const GlobalStyle = createGlobalStyle<{ darkTheme: boolean }>`
    body {
        background: ${props => (props.darkTheme ? '#333' : '#eee')};
    }
`;

export default App;