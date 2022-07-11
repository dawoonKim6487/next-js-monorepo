import Head from "next/head";
import React from "react";
import { Button, Title } from "components";

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Title>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </Title>
      <Button>Hello World</Button>
    </main>
  </div>
);

export default Home;
