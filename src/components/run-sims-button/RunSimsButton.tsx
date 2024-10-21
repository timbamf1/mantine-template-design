import { Button, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './RunSimsButton.module.css';

export function RunSimsButton() {
  const theme = useMantineTheme();
  const [loading, handlers] = useDisclosure();

  const runSims = () => {
    handlers.open();
    setTimeout(() => {
      handlers.close();
    }, 2000);
  }

  return (
    <div className={classes.button} style={{ '--default-am-green': theme.colors.defaultAmGreen[0] } as React.CSSProperties}>
      <Button loading={loading} onClick={runSims} color='var(--default-am-green)' size="xl" >Run Simulations</Button>
    </div>
  );
}