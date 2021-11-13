import React from 'react';
import clsx from 'clsx';

import NavigationMenu from '../navigation-menu/navigation-menu';

import styles from './navigation-bar.module.scss';

function NavigationBar() {
  const [isOpen, setOpen] = React.useState(false);

  const classes = clsx(styles.burger, {
    [styles.opened]: isOpen,
  });

  React.useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove('body-overflow');
      return;
    }

    document.body.classList.add('body-overflow');
  }, [isOpen]);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <button className={classes} onClick={handleOpen}>
        <div></div>
        <div></div>
        <div></div>
        <span className="visually-hidden">Показать/Скрыть Меню (Скрыто по умолчанию)</span>
      </button>
      <NavigationMenu isOpen={isOpen} handleOpenMenu={setOpen} />
    </>
  );
}

export default NavigationBar;
