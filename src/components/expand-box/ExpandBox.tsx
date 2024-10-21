import { Button, Tooltip, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconArrowsMaximize, IconArrowsMinimize } from '@tabler/icons-react';
import classes from './ExpandBox.module.css';

export function ExpandBox() {
    const theme = useMantineTheme();
    const [opened, { toggle }] = useDisclosure(false);

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px', '--default-am-green': theme.colors.defaultAmGreen[0] } as React.CSSProperties} className={classes.container}>
        <div style={{
            width: '80%',
            height: opened ? '70vh' : 150,
            transition: 'width 0.3s ease, height 0.3s ease',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightgray',
            color: 'black',
            position: 'relative'}}>
          {opened ? 'Expanded SimFlow Editor' : 'Collapsed SimFlow Editor'}
          <Tooltip label={opened ? 'Minimize' : 'Maximize'} position="bottom">
            <Button onClick={toggle} className={classes.button}>
              {opened ? <IconArrowsMinimize /> : <IconArrowsMaximize />}
            </Button>
          </Tooltip>
        </div>
      </div>
    );
}