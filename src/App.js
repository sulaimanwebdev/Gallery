import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Portfolio from './routes/portfolio/Portfolio'
import Home from './routes/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>

     <Route path="/" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      
    </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
