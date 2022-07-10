import Head from "next/head";
import { Button, Title } from "components";
const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Title>
        Welcome toVercel test<a href="https://nextjs.org">Next.js!</a>
      </Title>
      <Button>Hello World</Button>
    </main>
  </div>
);

export default Home;
