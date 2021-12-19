import styles from '@/styles/Layout.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Showcase from './Showcase';
import Footer from './Footer';
function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'DJ events | find the latest hot parties',
  keywords: 'music, dj, edm ,events',
  description: 'Find the latest dj and other events',
};

export default Layout;
