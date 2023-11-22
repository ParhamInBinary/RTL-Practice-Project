import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Drink } from '../../App';

interface IInputComponent {
  addDrinkToList: (drink: Drink) => void;
}

export const InputComponent = ({ addDrinkToList }: IInputComponent) => {
  const [input, setInput] = useState('');
  const [ListOfDrinks, setListOfDrinks] = useState<Drink[]>([]);

  useEffect(() => {
    const fetchMocktails = async () => {
      try {
        const response = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
        );
        if (response.ok) {
          const data = await response.json();

          const mocktails = data.drinks.map((drink: any) => ({
            title: drink.strDrink,
            complete: false,
          }));
          setListOfDrinks(mocktails);
        } else {
          console.error('Failed to fetch mocktails');
        }
      } catch (error) {
        console.error('Error fetching mocktails:', error);
      }
    };

    fetchMocktails();
  }, []);

  const handleAddClick = () => {
    if (input.trim() !== '') {
      addDrinkToList({ title: input, complete: false });
      setInput('');
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Autocomplete
        sx={{ width: '100%' }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={ListOfDrinks.map((option) => option.title)}
        value={input}
        onChange={(event, newValue) => setInput(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <Button variant="contained" onClick={handleAddClick}>
        Add
      </Button>
    </Box>
  );
};
