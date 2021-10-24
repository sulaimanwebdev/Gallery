import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Portfolio from './routes/portfolio/Portfolio'
import Home from './routes/homePage/Home'
import Services from './routes/servicesPage/Services'
import Contact from './routes/contactPage/Contact'



function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>

     <Route path="/" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route  path="/services" component={Services} />
      <Route  path="/contact" component={Contact} />

      
    </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
