import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './PokemonCard.css';

export const PokemonCard = ({
  name,
  image,
  imageBack,
  weight,
  id,
  type,
  height,
}) => {
  const handleClick = () => {
    const flipCardContainer = document.querySelector('.flip-card');
    flipCardContainer.classList.toggle('flipped');
  };

  return (
    <div class="flip-card" onClick={handleClick}>
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            src={image}
            alt="PokemonFront"
            style={{ width: '150px', height: '150px' }}
          />

          <h1 className="namePokemon">
            {name.charAt(0).toUpperCase() + name.slice(1) + ` #${id}`}
          </h1>
          <div className="type-container">
            <p
              className={`typeName ${
                type === 'bug'
                  ? 'bugBackground'
                  : type === 'normal'
                  ? 'normalBackground'
                  : type === 'poison'
                  ? 'poisonBackground'
                  : type === 'electric'
                  ? 'electricBackground'
                  : type === 'ground'
                  ? 'groundBackground'
                  : type === 'grass'
                  ? 'grassBackground'
                  : type === 'fire'
                  ? 'fireBackground'
                  : type === 'water'
                  ? 'waterBackground'
                  : type === 'fairy'
                  ? 'fairyBackground'
                  : ''
              }`}
            >
              {type}
            </p>
          </div>
        </div>
        <div class="flip-card-back">
          <img
            src={imageBack}
            alt="PokemonBack"
            style={{ width: '150px', height: '150px' }}
          />

          <p className="weight">Weight: {weight}</p>
          <p className="height">Height: {height}</p>
        </div>
      </div>
    </div>
  );
};
