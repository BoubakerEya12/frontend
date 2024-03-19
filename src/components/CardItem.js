import React from 'react';
import { Link } from 'react-router-dom';
import { VideoLabel, Description, Image, Mic } from '@mui/icons-material'; // Import the required icons

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {/* Use icons instead of images */}
            {props.icon === 'video' && <VideoLabel className='cards__item__icon' />}
            {props.icon === 'article' && <Description className='cards__item__icon' />}
            {props.icon === 'image' && <Image className='cards__item__icon' />}
            {props.icon === 'recording' && <Mic className='cards__item__icon' />}
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
