import Head from 'next/head';

const Seo = ({ title }) => {
  return (
    <Head>
      <title>WAGU | {title}</title>
    </Head>
  );
};
export default Seo;
