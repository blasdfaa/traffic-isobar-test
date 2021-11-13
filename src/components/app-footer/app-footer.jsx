import styles from './app-footer.module.scss';

function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.copyright}>Copyright © {currentYear}</p>
      </div>
    </footer>
  );
}

export default AppFooter;
