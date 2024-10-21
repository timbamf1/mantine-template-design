import { Menu, Group, Center, Burger, Container, Image, useMantineTheme } from '@mantine/core';
import { UserButton } from '../user-button/UserButton';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './HeaderMenu.module.css';

const links = [
  {
    link: '#1',
    label: 'File',
    links: [
      { link: '/blah', label: 'Blah' },
      { link: '/blah2', label: 'Blah 2' },
      { link: '/blah3', label: 'Blah 3' },
    ],
  },
  {
    link: '#2',
    label: 'Edit',
    links: [
      { link: '/blah', label: 'Blah' },
      { link: '/blah2', label: 'Blah 2' },
      { link: '/blah3', label: 'Blah 3' },
    ],
  },
  {
    link: '#3',
    label: 'Run',
    links: [
      { link: '/blah', label: 'Blah' },
      { link: '/blah2', label: 'Blah 2' },
      { link: '/blah3', label: 'Blah 3' },
    ]
  }
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const theme = useMantineTheme();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header} style={{ '--default-am-green': theme.colors.defaultAmGreen[0] } as React.CSSProperties} >
      <Container size="xlg" style={{ padding: 0 }}>
        <div className={classes.inner}>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Image src="src\assets\amf1_logo.png" alt="amf1_team_logo" className={classes.image} />
          <Group visibleFrom='sm'>
            <div className={classes.user}>
              <UserButton />
            </div>
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}