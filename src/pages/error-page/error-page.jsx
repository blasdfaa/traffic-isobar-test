import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppRoutes } from '../../constans';

import styles from './error-page.module.scss';

function ErrorPage({ code }) {
  return (
    <div className={styles.errorWrapper}>
      <h1 className={styles.errorCode}>ошибка {code}</h1>
      <p className={styles.errorMessage}>Извините, страница не найдена!</p>
      <Link to={AppRoutes.Home} className={styles.backLink}>
        Вернуться на главную
      </Link>
    </div>
  );
}

ErrorPage.propTypes = {
  code: PropTypes.number.isRequired,
};

export default ErrorPage;
