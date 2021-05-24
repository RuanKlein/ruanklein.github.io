import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Terminal from '../Components/Terminal';

import { Command } from '../Components/Terminal/types';

import { calcAge } from '../Helpers';

import { iData } from './types';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [data, setData] = useState<iData>({});

    const onChangeThemeCommand = () => {
        const message = `Tema alterado para ${darkTheme ? '\'claro\'' : '\'escuro\''}`;
        setDarkTheme(!darkTheme);

        return message;
    };

    const getInfo = (info : string, replace = {}) : string => {
        let content = data[info];

        if(!content) {
            return '';
        }

        if(replace) {
            Object.entries(replace).map((value : Array<any>) => {
                content = content.replace(`{${value[0]}}`, value[1]);
            });
        }

        return content;
    };

    useEffect(() => {
        const getData = async () => {
            const jsonData = await fetch('/info.json').then(res => res.json());
            setData(jsonData);
        };

        getData();
    }, []);

    let commandList : Command = {
        'quem-sou-eu':  getInfo('quem-sou-eu', { age: calcAge(1991, 12, 21)}),
        'experiencia':  getInfo('experiencia', { years: (new Date).getFullYear() - 2015 }),
        'skills':       getInfo('skills'),
        'linkedin':     getInfo('linkedin'),
        'github':       getInfo('github'),
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