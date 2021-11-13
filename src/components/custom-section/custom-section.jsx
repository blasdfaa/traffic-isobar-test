import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './custom-section.module.scss';

function CustomSection({ children, title, allyTitle, ...props }) {
  return (
    <section className={styles.section} {...props}>
      <div className="container">
        <h2 className={clsx(styles.title, allyTitle && 'visually-hidden')}>
          <span>{title}</span>
        </h2>
        {children}
      </div>
    </section>
  );
}

CustomSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  allyTitle: PropTypes.string,
};

export default CustomSection;
