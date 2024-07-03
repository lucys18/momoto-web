import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from '@mantine/core'
import { theme, resolver } from './theme'
import '@mantine/core/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <App/>
    </MantineProvider>
  </StrictMode>,
)
