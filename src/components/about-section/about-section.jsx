import Button from '../button/button';
import CustomSection from '../custom-section/custom-section';

import styles from './about-section.module.scss';
import avatar from '../../assets/img/man.png';

function AboutSection() {
  return (
    <CustomSection title="Обо мне">
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <h3 className={styles.name}>Sed ut perspiciatis</h3>
          <p className={styles.info}>
            At&nbsp;vero eos et&nbsp;accusamus et&nbsp;iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et&nbsp;quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in&nbsp;culpa qui officia deserunt mollitia
            animi, id&nbsp;est laborum et&nbsp;dolorum fuga. Et&nbsp;harum quidem rerum facilis est
            et&nbsp;expedita distinctio.
          </p>
          <Button className={styles.viewButton} type="button" size="small">
            Смотреть работу
          </Button>
        </div>
        <div className={styles.photoWrapper}>
          <img className={styles.photo} src={avatar} width="260" height="260" alt="Фотография пользователя" />
        </div>
      </div>
    </CustomSection>
  );
}

export default AboutSection;
