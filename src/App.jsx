import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import './App.css'
import Header from './components/Header'
import { getDesignTokens } from './theme';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



export default function App() {

  const [mode, setMode] = React.useState(localStorage.getItem('currentMode') ?? 'dark');


  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <Header setMode={setMode} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
