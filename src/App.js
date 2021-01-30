import './App.css';
import MainPage from "./components/pages/mainpage/MainPage";
import {Box, createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {cyan, red} from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[50]
    },
    secondary: {
      main: red[900]
    }
  }
})

function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <Box bgcolor={"primary.main"}>
          <MainPage/>
        </Box>
      </MuiThemeProvider>
  );
}

export default App;
