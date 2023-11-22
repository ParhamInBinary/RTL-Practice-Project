import { CheckBox, CheckBoxOutlineBlank, Delete } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { Drink } from '../../App';
import { Container } from './styles';

interface IListComponent {
  drinks: Drink[];
  setDrinks: React.Dispatch<React.SetStateAction<Drink[]>>;
}

export const ListComponent = ({ drinks, setDrinks }: IListComponent) => {
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

  return (
    <Container>
      {drinks.map((drink, index) => (
        <Box
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
  );
};
