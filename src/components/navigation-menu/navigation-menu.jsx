import React from 'react';
import propTypes from 'prop-types';
import clsx from 'clsx';
import { useLocation } from 'react-router';

import { AppRoutes } from '../../constans';
import NavigationLink from '../navigation-link/navigation-link';

import styles from './navigation-menu.module.scss';

function NavigationMenu({ isOpen, handleOpenMenu }) {
  const location = useLocation();

  React.useEffect(() => {
    handleOpenMenu(false);
  }, [location.pathname]);

  const classes = clsx(styles.list, {
    [styles.opened]: isOpen,
  });

  return (
    <ul className={classes}>
      <li className={styles.listItem}>
        <NavigationLink className={styles.listLink} activeClassName={styles.active} to={AppRoutes.Home}>
          Главная
        </NavigationLink>
      </li>
      <li className={styles.listItem}>
        <NavigationLink className={styles.listLink} activeClassName={styles.active} to={AppRoutes.Example}>
          Пример
        </NavigationLink>
      </li>
    </ul>
  );
}

NavigationMenu.propTypes = {
  isOpen: propTypes.bool.isRequired,
};

export default NavigationMenu;
