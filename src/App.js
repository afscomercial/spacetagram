import React, { useCallback, useEffect, useState } from 'react';
import { useFetchPictures } from './hooks/useFetchPictures';
import { PictureItem } from './components/PictureItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const App = () => {
  const { picturesState, handleLike} = useFetchPictures();
  const { data, isLoading } = picturesState;
  const [picturesToShow, setPicturesToShow] = useState([]);
  const [picCount, setPicCount] = useState(9);
 
  const sortPictures = useCallback(
    () => {
      if (!isLoading && data.length > 0) {
        setPicturesToShow(data.slice(0, picCount));
      }
    },
    [isLoading, data, picCount]
  );

  const handleCount = (count) =>{
    setPicCount(count)
  }

  useEffect(() => {
    sortPictures();
  }, [sortPictures]);

  
  return (
    <>
      <header>
        <h1>Spacestagram</h1>
        <h2>Image-sharing from the final frontier</h2>
      </header>
      <nav>
        <div>Number of photos:</div>
        <button className='num-btn ' onClick={() => handleCount(3)}>
          3
        </button>
        <button className='num-btn' onClick={() => handleCount(6)}>
          6
        </button>
        <button className='num-btn' onClick={() => handleCount(9)}>
          9
        </button>
      </nav>

      <main>
        {isLoading && (
          <FontAwesomeIcon icon={faSpinner} spin className='spinner' />
        )}
        {!isLoading && (
          <div className='card-grid'>
            {picturesToShow.map((pic) => (
              <PictureItem key={pic.title} pic={pic} handleLike={handleLike} />
            ))}
          </div>
        )}
      </main>

      <footer>
        <hr />
        An app to share photos of the last 9 days of 2021 from APOD one of
        NASA’s image APIs.
      </footer>
    </>
  );
};

export default App;
