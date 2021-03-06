import React from 'react';
import Head from 'next/head';
import { Container } from '../Container/Container';

import './Layout.scss';

import { Header } from '../Header/Header';
import { Newsletter } from '../Newsletter/Newsletter';

export const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | hellofrontend.pl`
            : `hellofrontend.pl - wieści ze świata front-endu`}
        </title>
        <link rel='favico' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans|Pacifico&display=swap'
          rel='stylesheet'
        ></link>
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        />
      </Head>
      <Header />
      <Container>{children}</Container>
      <Newsletter />
    </>
  );
};
