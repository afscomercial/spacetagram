export const getPictures = async () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=gJfg1fVQCoMkxd4EVncw4tIRutThDp5Q0fxQ8z9h&start_date=2021-12-23&end_date=2021-12-31`;
  const resp = await fetch(url);
  const data = await resp.json();
  const images = data.map((img) => {
    const imgURl =
      img.url.match(/\.(jpeg|jpg|gif|png)$/) != null
        ? img.url
        : 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg';

    return {
      title: img.title,
      date: img.date,
      url: imgURl,
      likes: 0
    };
  });

  return images;
};
