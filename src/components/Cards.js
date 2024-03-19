import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Unify AI with our services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              icon='video'
              text='Edit Videos'
              path='/services'
            />
            <CardItem
              icon='article'
              text='Write Articles'
              path='/services'
            />
            <CardItem
              icon='image'
              text='Edit Images'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              icon='recording'
              text='Record Audio'
              path='/services'
            />
            <CardItem
              icon='recording'
              text='Record Audio'
              path='/services'
            />
            <CardItem
              icon='recording'
              text='Record Audio'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
