import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

import App from './App'

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#242424'
        }
    }
});

const funkyTheme = createTheme({
    palette: {
      primary: {
        main: '#ff6f61', // Bright Coral
      },
      secondary: {
        main: '#4a90e2', // Vivid Blue
      },
      background: {
        default: '#f5f5f5', // Light Grey
        paper: '#ffffff', // White
      },
      text: {
        primary: '#333333', // Dark Grey
        secondary: '#4a90e2', // Vivid Blue
      },
    },
    typography: {
      fontFamily: `'Comic Sans MS', 'cursive', 'sans-serif'`,
      h1: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#ff6f61',
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#4a90e2',
      },
      body1: {
        fontSize: '1rem',
        color: '#333333',
      },
      button: {
        textTransform: 'none',
        fontWeight: 'bold',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '50px',
            padding: '10px 20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          },
          containedPrimary: {
            backgroundColor: '#ff6f61',
            '&:hover': {
              backgroundColor: '#e55e50',
            },
          },
          containedSecondary: {
            backgroundColor: '#4a90e2',
            '&:hover': {
              backgroundColor: '#4280c2',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#4a90e2',
            color: '#ffffff',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: '20px',
            padding: '20px',
          },
        },
      },
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <CssBaseline />
            <App />
        </BrowserRouter>
    </ThemeProvider>
)