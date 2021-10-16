import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Portfolio from './routes/portfolio/Portfolio'
function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
