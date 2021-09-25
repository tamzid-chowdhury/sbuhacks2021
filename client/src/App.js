import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Postpage from "./pages/Postpage"

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path={["/"]} component={Homepage} ></Route>
          
          <Route path="/post">
            <Postpage />
          </Route>
          
        </Switch>

        <Switch>
          
        </Switch>


      </Router>
    </ChakraProvider>
  );
}

export default App;
