import { CheckBox, CheckBoxOutlineBlank, Delete } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

import { useState } from 'react';
import { Drink } from '../../App';
import { FilterComponent } from './filter';
import { Container } from './styles';

interface IListComponent {
  drinks: Drink[];
  setDrinks: React.Dispatch<React.SetStateAction<Drink[]>>;
}

export enum DRINKS_FILTER {
  ALL = 'All',
  COMPLETED = 'Completed',
  NON_COMPLETED = 'Non-completed',
}

export const ListComponent = ({ drinks, setDrinks }: IListComponent) => {
  const [filter, setFilter] = useState(DRINKS_FILTER.ALL);
  const handleCompleteDrink = (selectedDrink: Drink) => {
    if (!selectedDrink) return;

    const updatedDrinks = drinks.map((drink) => {
      if (drink.title === selectedDrink.title) {
        return { ...drink, complete: !drink.complete };
      }
      return drink;
    });

    setDrinks(updatedDrinks);
  };

  const handleDeleteDrink = (selectedDrink: Drink, index: number) => {
    if (!selectedDrink) return;

    const updatedDrinks = drinks.filter((_, idx) => idx !== index);
    setDrinks(updatedDrinks);
  };

  const filteredDrinks = () => {
    switch (filter) {
      case DRINKS_FILTER.COMPLETED:
        return drinks.filter((drink) => drink.complete);
      case DRINKS_FILTER.NON_COMPLETED:
        return drinks.filter((drink) => !drink.complete);
      case DRINKS_FILTER.ALL:
      default:
        return drinks;
    }
  };

  const handleClearDrinks = () => {
    setDrinks([]);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: '5px',
        }}
      >
        <FilterComponent filter={filter} setFilter={setFilter} />
        <Button variant="contained" onClick={handleClearDrinks}>
          Clear all
        </Button>
      </Box>
      <Container>
        {filteredDrinks().map((drink, index) => (
          <Box
            key={index}
            sx={{
              padding: '10px',
              borderBottom: '1px solid #c1c1c1',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                textDecoration: drink.complete ? 'line-through' : 'none',
                color: drink.complete ? '#c1c1c1' : 'inherit',
              }}
            >
              {drink.title}
            </Typography>
            <Box sx={{ display: 'flex', gap: '5px' }}>
              <Box onClick={() => handleCompleteDrink(drink)}>
                {drink.complete ? <CheckBox /> : <CheckBoxOutlineBlank />}
              </Box>
              <Delete onClick={() => handleDeleteDrink(drink, index)} />
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};
