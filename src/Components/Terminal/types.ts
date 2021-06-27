export type CommandType = { 
    [key: string]: string | ((arg ?: string) => string)
};

export interface iTerminal {
    dark?: boolean;
    commandList: CommandType;
    welcome?: string;
    commandNotFound?: string;
    prompt?: string;
    showControlButton?: boolean;
}