import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const PokemonCard = ({ name, image }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 250 }} image={image} title="pokemons" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Visualizar</Button>
        <Button size="small">Ler mais sobre</Button>
      </CardActions>
    </Card>
  );
};
