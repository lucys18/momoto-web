import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

import App from './App'
import { resolver, theme } from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
