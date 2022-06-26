import React from 'react';
import { Container, Center } from '@mantine/core';
import { HeaderControls, meta, MantineLogo, ColorSchemeControl } from '@mantine/ds';
import Link from 'next/link';
import useStyles from './Header.styles';

interface HeaderProps {
  toggleDir(): void;
  dir: 'rtl' | 'ltr';
}

export function Header({ toggleDir, dir }: HeaderProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.header}>
      <Container size="xl" px="md" className={classes.inner}>
        <Link href="/" passHref>
          <Center component="a">
            <MantineLogo variant="ui.mantine.dev" size={30} />
          </Center>
        </Link>
        <HeaderControls
          sx={(theme) => ({ [theme.fn.smallerThan('sm')]: { display: 'none' } })}
          onSearch={() => {}}
          githubLink={meta.gitHubLinks.mantineUi}
          direction={dir}
          toggleDirection={toggleDir}
        />
        <Center sx={(theme) => ({ [theme.fn.largerThan('sm')]: { display: 'none' } })}>
          <ColorSchemeControl />
        </Center>
      </Container>
    </div>
  );
}
