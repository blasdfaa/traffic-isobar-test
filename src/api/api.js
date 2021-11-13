const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

export const loadRandomImage = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error();
  }

  const [image] = await response.json();

  return image.url;
};
