import Head from "next/head";
import { Button } from "components/Button";
const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Button>Hello World</Button>
    </main>
  </div>
);

export default Home;
