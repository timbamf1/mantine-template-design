import { Container, Group, useMantineTheme, Tooltip } from '@mantine/core';
import classes from './Footer.module.css';

const apiStatuses = [
  { name: 'api1', status: 'OK' },
  { name: 'api2', status: 'OK' },
  { name: 'api3', status: 'Down' },
];

export function Footer() {
  const theme = useMantineTheme();

  const items = apiStatuses.map((api) => {
    return (
      <Tooltip key={api.name} label={`${api.name}: ${api.status}`} position="top">
        <div className={`${classes.apiHealth} ${api.status === 'OK' ? `${classes.healthy}` : `${classes.unhealthy}`}`}>
          {api.name}
        </div>
      </Tooltip>
    )
  });
  
  return (
    <div className={classes.footer} style={{ '--default-am-green': theme.colors.defaultAmGreen[0] } as React.CSSProperties}>
      <Container className={classes.inner}>
      {/* <Image src="src\assets\amf1_logo.png" alt="amf1_team_logo" className={classes.image} /> */}
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          {items}
        </Group>
      </Container>
    </div>
  );
}