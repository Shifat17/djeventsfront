import Layout from '@/components/Layout';
import Link from 'next/link';
import styles from '@/styles/404.module.css';
function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>404</h1>
        <h4>Sorry , There is nothing here</h4>
        <Link href="/"> Go Back Home</Link>
      </div>
    </Layout>
  );
}

export default NotFound;
