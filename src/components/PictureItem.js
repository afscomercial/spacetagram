import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export const PictureItem = ({pic, handleLike}) => {
  const { date, title, url, likes} = pic;
  return (
    <div className='card animate__animated animate__fadeIn'>
      <div
        className='card__img'
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div className='card__data'>
        <div className='card__data-title'> {title} </div>
        <div className='card__data-date'> {date} </div>
        <div className='card__data-like'>
          <FontAwesomeIcon icon={faThumbsUp} className='btn-like' onClick={ () => handleLike(title)}/>
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
};
