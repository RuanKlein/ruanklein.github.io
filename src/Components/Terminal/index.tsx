import { ReactTerminal, TerminalContextProvider } from 'react-terminal';

import { iTerminal } from './types';

const Terminal : React.FC<iTerminal> = ({
  dark = false,
  commandList,
  welcome = '',
  commandNotFound = 'Command not found',
  prompt = '➜ ',
  showControlButton = false
}) => {
  return (
    <TerminalContextProvider>
      <ReactTerminal
        themes={{
          default: {
            themeBGColor: dark ? '#1E1E1E' : '#fff',
            themeToolbarColor: dark ? '#282828' : '#DDD9D6',
            themeColor: dark ? '#fff' : '#000',
            themePromptColor: '#558417',
          },
        }}
        theme="default"
        commands={commandList}
        welcomeMessage={welcome}
        errorMessage={commandNotFound}
        showControlButtons={showControlButton}
        prompt={prompt}
      />
    </TerminalContextProvider>
  );
};

export default Terminal;
