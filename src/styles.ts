import { Box as MuiBox, styled } from '@mui/material';

export const Header = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
}));

export const Body = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 20,
  flex: 1,
  width: '100%',
  padding: '100px',
}));
