import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Drink } from '../../App';

interface IInputComponent {
  addDrinkToList: (drink: Drink) => void;
}

export const InputComponent = ({ addDrinkToList }: IInputComponent) => {
  const ListOfDrinks = [{ title: 'drink1' }, { title: 'drink2' }];
  const [input, setInput] = useState('');

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
