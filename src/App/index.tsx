import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Terminal from '../Components/Terminal';

import { Command } from '../Components/Terminal/types';

import { calcAge } from '../Helpers';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const onChangeThemeCommand = () => {
        const message = `Tema alterado para ${darkTheme ? '\'claro\'' : '\'escuro\''}`;
        setDarkTheme(!darkTheme);

        return message;
    };

    const getInfo = async (info : string, replace = {}) => {
        const data = await fetch('/info.json').then(res => res.json());

        let content = data[info];
        
        if(replace) {
            Object.entries(replace).map(value => {
                content = content.replace(`{${value[0]}}`, value[1]);
            });
        }

        return content;
    };

    let commandList : Command = {
        'quem-sou-eu':  async () => await getInfo('quem-sou-eu', { age: calcAge(1991, 12, 21)}),
        'experiencia':  async () => await getInfo('experiencia', { years: (new Date).getFullYear() - 2015 }),
        'skills':       async () => await getInfo('skills'),
        'linkedin':     async () => await getInfo('linkedin'),
        'github':       async () => await getInfo('github'),
        'alterar-tema': onChangeThemeCommand,
    };

    commandList = {
        ...commandList,
        ajuda: `Comandos: ${Object.entries(commandList).map((command, key) => key === Object.keys(commandList).length ? `${command[0]}, ` : ` ${command[0]}`)}`
    };

    return <>
        <GlobalStyle darkTheme={darkTheme} />
        <Terminal
            dark={darkTheme}
            commandList={commandList}
            welcome="Bem vindo! Para começar, digite: 'ajuda' "
            commandNotFound="Comando não encontrado. Tente 'ajuda'"
            prompt="ruan@site:~$ "
        />
    </>;
};

const GlobalStyle = createGlobalStyle<{ darkTheme: boolean }>`
    body {
        background: ${props => (props.darkTheme ? '#333' : '#eee')};
    }
`;

export default App;