import { Box, Container, Grid } from '@mui/material';
import { NavBar } from '../components/NavBar/NavBar';
import { PokemonCard } from '../components/PokemonCard/PokemonCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [pokemons, pokemonsSet] = useState([]);
  const [filteredPokemons, filteredPokemonsSet] = useState([]);

  const filterPokemons = () => {
    const desiredPokemons = [
      'charmander',
      'bulbasaur',
      'squirtle',
      'caterpie',
      'weedle',
      'pidgey',
      'rattata',
      'spearow',
      'ekans',
      'pikachu',
      'sandshrew',
      'nidoran',
      'clefairy',
      'vulpix',
      'jigglypuff',
      'zubat',
      'oddish',
      'paras',
      'venonat',
      'diglett',
      'meowth',
      'psyduck',
      'mankey',
      'growlithe',
      'poliwag',
      'abra',
      'machop',
      'bellsprout',
      'tentacool',
      'geodude',
      'ponyta',
      'slowpoke',
      'magnemite',
      'seel',
      'grimer',
      'shellder',
      'haunter',
      'onix',
      'paras',
      'mew',
    ];

    const filtered = pokemons.filter((pokemon) =>
      desiredPokemons.includes(pokemon.data.name.toLowerCase())
    );

    filteredPokemonsSet(filtered);
  };

  useEffect(() => {
    filterPokemons();
    getAPI();
  }, []);

  const getAPI = () => {
    var endPoints = [];
    for (var i = 1; i < 1000; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    var response = axios
      .all(endPoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => pokemonsSet(res))
      .catch((err) => console.log(err));

    // axios
    //   .get('https://pokeapi.co/api/v2/pokemon?limit=1000')
    //   .then((res) => pokemonsSet(res))
    //   .catch((err) => console.log(err));
  };

  return (
    <Box>
      <NavBar />
      <Container maxWidth="xg">
        <Grid container>
          {filteredPokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <PokemonCard
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
