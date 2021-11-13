import { Link } from 'react-router-dom';

import { AppRoutes } from '../../constans';
import NavigationBar from '../navigation-bar/navigation-bar';

import styles from './app-header.module.scss';
import headerLogo from '../../assets/img/traffic-logo.svg';

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <Link className={styles.logoLink} to={AppRoutes.Home}>
          <img
            className={styles.logo}
            src={headerLogo}
            width="200"
            height="30"
            alt="Логотип Traffic Isobar"
          />
        </Link>
        <nav>
          <NavigationBar />
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
