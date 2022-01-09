import { useState, useEffect } from 'react';
import { getPictures } from '../helper/getPictures';

export const useFetchPictures = () => {

  const [picturesState, setPicturesState] = useState({
    data: [],
    isLoading: true,
    loadLocalStorage: false
  });
  const { data, loadLocalStorage} = picturesState;

  useEffect(() => {
    const localPictures = JSON.parse(localStorage.getItem('pictures'));
    if (!localPictures || localPictures.length < 1) {
      console.log('fetch data')
      getPictures().then((imgs) => {
        setPicturesState({
          data: imgs,
          isLoading: false,
          loadLocalStorage: true
        });
      });
    } else {
      setPicturesState({
        data: localPictures,
        isLoading: false,
        loadLocalStorage: false
      });
    }
  }, []);

  useEffect(() => {
    if(loadLocalStorage){
      console.log('load')
      localStorage.setItem('pictures', JSON.stringify(data));
    }
  }, [data, loadLocalStorage]);

  const handleLike = (title) => {
    const updatedPictures = picturesState.data.map((pic) => {
      if (pic.title === title) {
        return {
          ...pic,
          likes: (pic.likes<1) ? ++pic.likes : --pic.likes,
        };
      } else {
        return pic;
      }
    });

    setPicturesState({
      data: updatedPictures,
      isLoading: false,
      loadLocalStorage: true
    });
  };

  return { picturesState, handleLike };
};
