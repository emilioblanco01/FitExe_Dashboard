import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './styles/commonStyles';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SnackbarProvider
    maxSnack={3}
  >

    <React.StrictMode>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </RecoilRoot>
    </React.StrictMode>

  </SnackbarProvider>
)
