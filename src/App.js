import { AppRoutes } from './routes'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './contexts/theme-context'


function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    }

`

export default App;
