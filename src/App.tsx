import { Box, Typography } from '@mui/material';

import { useState } from 'react';
import { InputComponent, ListComponent } from './components';
import { Body, Header } from './styles';

export interface Drink {
  title: string;
  complete: boolean;
}

function App() {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  const addDrinkToList = (drink: Drink) => {
    const existingDrink = drinks.find(
      (drinkInList) => drinkInList.title === drink.title
    );
    if (existingDrink) return;

    setDrinks((prevState) => [...prevState, drink]);
  };

  return (
    <Box>
      <Header>
        <Typography variant="h1">Mark's To-drink list</Typography>
      </Header>
      <Body>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '500px',
          }}
        >
          <InputComponent addDrinkToList={addDrinkToList} />
          <ListComponent drinks={drinks} setDrinks={setDrinks} />
        </Box>
      </Body>
    </Box>
  );
}

export default App;
