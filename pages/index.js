import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <a href="https://google.com">google.com</a>
        <br />
        <a href="refin://">refin://</a>
        <br />
        <a href="refin://aa">refin://aa</a>
        <br />
        <a href="fb://">fb://</a>
        <br />
        <a href="fb://aa">fb://aa</a>
        <br />
        <a href="metalpay://">metalpay://</a>
        <br />
        <a href="metalpay://aa">metalpay://</a>
        <br />
        <a href="metalpay-prod://">metalpay-prod://</a>
        <br />
        <a href="metalpay-prod://">metalpay-prod://aa</a>
        <br />
        <a href="metalpay-dev://">metalpay-dev://</a>
        <br />
        <a href="metalpay-dev://">metalpay-dev://aa</a>
        <br />
        <a href="metalpay-local://">metalpay-local://</a>
        <br />
        <a href="metalpay-local://">metalpay-local://aa</a>
        <br />
        <a href="http://metalpay.test-app.link/">
          http://metalpay.test-app.link/
        </a>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
