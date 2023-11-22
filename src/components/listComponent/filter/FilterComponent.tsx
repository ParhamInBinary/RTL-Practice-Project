import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { DRINKS_FILTER } from '../ListComponent';

interface IFilterComponent {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<DRINKS_FILTER>>;
}

export const FilterComponent = ({ filter, setFilter }: IFilterComponent) => {
  const handleFilterDrinks = (filterSetting: DRINKS_FILTER) => {
    setFilter(filterSetting);
  };

  return (
    <Box sx={{ display: 'flex', gap: '15px' }}>
      <Box
        sx={{ display: 'flex', gap: '5px' }}
        onClick={() => handleFilterDrinks(DRINKS_FILTER.ALL)}
      >
        <Typography>{DRINKS_FILTER.ALL}</Typography>
        {filter === DRINKS_FILTER.ALL ? <CheckBox /> : <CheckBoxOutlineBlank />}
      </Box>
      <Box
        sx={{ display: 'flex', gap: '5px' }}
        onClick={() => handleFilterDrinks(DRINKS_FILTER.COMPLETED)}
      >
        <Typography>{DRINKS_FILTER.COMPLETED}</Typography>
        {filter === DRINKS_FILTER.COMPLETED ? (
          <CheckBox />
        ) : (
          <CheckBoxOutlineBlank />
        )}
      </Box>
      <Box
        sx={{ display: 'flex', gap: '5px' }}
        onClick={() => handleFilterDrinks(DRINKS_FILTER.NON_COMPLETED)}
      >
        <Typography>{DRINKS_FILTER.NON_COMPLETED}</Typography>
        {filter === DRINKS_FILTER.NON_COMPLETED ? (
          <CheckBox />
        ) : (
          <CheckBoxOutlineBlank />
        )}
      </Box>
    </Box>
  );
};
