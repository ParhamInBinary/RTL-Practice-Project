import { Box as MuiBox, styled } from '@mui/material';

export const Container = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '500px',
  width: '500px',
  borderRadius: '10px',
  padding: '20px',
  gap: '20px',
  border: '1px solid #a2a2a2',
}));
