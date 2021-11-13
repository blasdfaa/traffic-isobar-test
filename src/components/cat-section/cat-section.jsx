import React from 'react';

import { loadRandomImage } from '../../api/api';
import { ApiLoadingStatus } from '../../constans';
import Button from '../button/button';
import CustomSection from '../custom-section/custom-section';

import styles from './cat-section.module.scss';
import preloader from '../../assets/img/preloader.gif';

const ERROR_REQUEST_MESSAGE = 'При загрузке данных произошла ошибка';

function CatSection() {
  const [imageUrl, setImageUrl] = React.useState('');
  const [imageLoadingStatus, setImageLoadingStatus] = React.useState(ApiLoadingStatus.Loading);
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    getImageUrl();
  }, []);

  const getImageUrl = async () => {
    setImageLoadingStatus(ApiLoadingStatus.Loading);
    try {
      const url = await loadRandomImage();

      setImageUrl(url);
      setImageLoadingStatus(ApiLoadingStatus.Idle);
    } catch {
      setErrorMessage(ERROR_REQUEST_MESSAGE);
      setImageLoadingStatus(ApiLoadingStatus.Failure);
    }
  };

  const handleRefreshImage = () => {
    getImageUrl();
  };

  const isLoadingReady = imageLoadingStatus === ApiLoadingStatus.Idle;
  const isImageLoading = imageLoadingStatus === ApiLoadingStatus.Loading;
  const isLoadingFailed = imageLoadingStatus === ApiLoadingStatus.Failure;

  return (
    <CustomSection title="Пример">
      <div className={styles.content}>
        <h3 className={styles.title}>Картинка с котом </h3>
        <div className={styles.catImgWrapper}>
          {isImageLoading && (
            <img className={styles.imagePreloader} src={preloader} width="130" height="106" alt="" />
          )}
          {!isImageLoading && (
            <img
              className={styles.catImg}
              src={imageUrl}
              width="258"
              height="258"
              alt="Фото случайного кота"
            />
          )}
        </div>
        <Button
          type="button"
          size="small"
          disabled={isImageLoading ? 'disabled' : ''}
          onClick={handleRefreshImage}
        >
          {isImageLoading && 'Загрузка...'}
          {(isLoadingReady || isLoadingFailed) && 'Загрузить другую'}
        </Button>
        {isLoadingFailed && <p>{errorMessage}</p>}
      </div>
    </CustomSection>
  );
}

export default CatSection;
