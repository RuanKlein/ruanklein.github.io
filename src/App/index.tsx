import { useState, useEffect } from 'react';

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

            setWelcomeMessage(`[${new Date().toLocaleString()}] IP ${ip}, ${browser} from ${os} `);
        };
        fetchData();
    }, []);

    useEffect(() => {
        document.body.style.background = darkTheme ? '#333' : '#eee';
    }, [darkTheme]);

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

    return <Terminal
            dark={darkTheme}
            commandList={commandList}
            commandNotFound="Command not found. Type 'help' to print available commands."
            welcome={welcomeMessage}
    />;
};

export default App;