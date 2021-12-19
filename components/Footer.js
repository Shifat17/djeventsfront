import Link from 'next/link';
import styles from '@/styles/Footer.module.css';
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>CopyRight &copy; DJ Events 2021</p>
      <p>
        <Link href="/about">About This Project</Link>
      </p>
    </footer>
  );
}

export default Footer;
