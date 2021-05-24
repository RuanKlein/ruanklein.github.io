export type TerminalFunction = (arg ?: any) => string | Promise<string>;

export type Command = { 
    [key: string]: string | TerminalFunction
};

export interface iTerminal {
    dark: boolean;
    commandList: Command;
    welcome: string;
    commandNotFound: string;
    prompt?: string;
}